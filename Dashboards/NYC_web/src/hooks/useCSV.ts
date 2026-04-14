import { useQuery } from "@tanstack/react-query";
import { loadCSV } from "@/lib/dataLoader";

export function useCSV<T = Record<string, unknown>>(path: string) {
  const { data = [], isLoading, isError } = useQuery<T[]>({
    queryKey: ["csv", path],
    queryFn: () => loadCSV<T>(path),
    staleTime: Infinity,
  });
  return { data, loading: isLoading, error: isError };
}
