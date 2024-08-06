import { api } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import images from '@/lib/projects-images.json';

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  images: string[];
  languages: string[];
}

async function getPinnedRepositories(): Promise<Project[]> {
  try {
    const response = await api.get<{
      projects: Omit<Project, 'images'>[];
    }>('/github/projects');
    const repos = response.data.projects;
    const projects: Project[] = repos.map((repo) => ({
      ...repo,
      images: (images as Record<string, string[]>)[repo.name] ?? [],
    }));

    return projects;
  } catch (error) {
    return [];
  }
}

export default function useProjects() {
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ['github', 'repositories', 'pinned'],
    queryFn: getPinnedRepositories,
  });

  return {
    isPending,
    isError,
    data: data ?? [],
    error,
    refetch,
  };
}
