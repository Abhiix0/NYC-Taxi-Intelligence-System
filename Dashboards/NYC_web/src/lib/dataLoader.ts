import Papa from "papaparse";

/**
 * Fetches and parses a CSV file from the public/data directory.
 * @param path - e.g. "/data/trips_by_hour.csv"
 * @returns Parsed array of row objects with inferred types
 */
export async function loadCSV<T = Record<string, unknown>>(path: string): Promise<T[]> {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to fetch ${path}: ${response.status}`);
    const text = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse<T>(text, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => resolve(results.data),
        error: (err) => reject(err),
      });
    });
  } catch (err) {
    console.error("[loadCSV] Error loading", path, err);
    return [];
  }
}
