import { api } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  images: string[];
  languages: string[];
}

// hardcoded images
const projectImages: {
  name: string;
  urls: string[];
}[] = [];

async function getPinnedRepositories(): Promise<Project[]> {
  try {
    const response = await api.get<{
      projects: Omit<Project, 'images'>[];
    }>('/github/projects');
    const repos = response.data.projects;
    const projects: Project[] = repos.map((repo) => ({
      ...repo,
      images: projectImages.find(({ name }) => name === repo.name)?.urls ?? [],
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
