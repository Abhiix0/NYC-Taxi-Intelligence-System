import { useEffect, useState } from "react";
import { loadCSV } from "@/lib/dataLoader";

/**
 * Fetches and parses a CSV from /public/data/.
 * Returns the parsed rows and a loading flag.
 */
export function useCSV<T = Record<string, unknown>>(path: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCSV<T>(path).then((rows) => {
      setData(rows);
      setLoading(false);
    });
  }, [path]);

  return { data, loading };
}
