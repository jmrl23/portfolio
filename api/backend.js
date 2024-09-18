import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: process.env.BACKEND_URL,
  pathRewrite: {
    '^/api': '',
  },
  changeOrigin: true,
  headers: {
    authorization: `Bearer ${process.env.BACKEND_KEY}`,
  },
});
