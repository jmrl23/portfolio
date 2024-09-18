import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(async function ({ mode }) {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: parseInt(env.PORT ?? '3000'),
      proxy: {
        '/api': {
          target: env.BACKEND_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
          headers: {
            authorization: `Bearer ${env.BACKEND_KEY}`,
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      __APP_ENV__: process.env.VITE_VERCEL_ENV,
    },
    build: {
      chunkSizeWarningLimit: 600,
    },
  };
});
