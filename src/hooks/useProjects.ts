import { useQuery } from '@tanstack/react-query';

interface Repository {
  author: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
}

async function getPinnedRepositories(): Promise<Repository[]> {
  try {
    // TODO: make own backend endpoint
    const response = await fetch('https://pinned.berrysauce.me/get/jmrl23');
    if (!response.ok) return [];
    const repositories = await response.json();
    return repositories;
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
