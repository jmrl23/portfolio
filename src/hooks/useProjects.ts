import { api } from '@/lib/axios';
import {
  projectListPayloadSchema,
  projectSchema,
} from '@/schemas/projectsSchema';
import { useQuery } from '@tanstack/react-query';
import { FromSchema } from 'json-schema-to-ts';

export type Project = FromSchema<typeof projectSchema>;

export type ProjectListPayload = FromSchema<typeof projectListPayloadSchema>;

async function fetchProjects(payload: ProjectListPayload): Promise<Project[]> {
  try {
    const response = await api.get<{ data: Project[] }>('/projects', {
      params: payload,
    });
    const { data: projects } = response.data;
    return projects;
  } catch (error) {
    return [];
  }
}

export default function useProjects(payload: ProjectListPayload = {}) {
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ['projects', JSON.stringify(payload)],
    queryFn: () => fetchProjects(payload),
  });

  return {
    isPending,
    isError,
    data: data ?? [],
    error,
    refetch,
  };
}
