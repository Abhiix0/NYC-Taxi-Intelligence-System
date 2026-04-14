import { useCSV } from "./useCSV";

export interface KpiRow     { total_trips: number; total_revenue: number; avg_fare: number; tip_rate: number; }
export interface TripHour   { pickup_hour: number; trip_count: number; }
export interface RevHour    { pickup_hour: number; total_revenue: number; }
export interface DayRow     { day_of_week: string; trip_count: number; }
export interface DistRow    { distance_range: string; avg_fare: number; }
export interface TipRow     { tip_category: string; trip_count: number; }
export interface HotspotRow { pickup_latitude: number; pickup_longitude: number; trip_count: number; }

export function useAllData() {
  const kpis        = useCSV<KpiRow>("/data/kpis.csv");
  const tripsHour   = useCSV<TripHour>("/data/trips_by_hour.csv");
  const revenueHour = useCSV<RevHour>("/data/revenue_by_hour.csv");
  const tripsDay    = useCSV<DayRow>("/data/trips_by_day.csv");
  const distFare    = useCSV<DistRow>("/data/distance_fare.csv");
  const tipsDist    = useCSV<TipRow>("/data/tips_dist.csv");
  const hotspots    = useCSV<HotspotRow>("/data/map_hotspots.csv");

  const isLoading = [kpis, tripsHour, revenueHour, tripsDay, distFare, tipsDist, hotspots].some(d => d.loading);
  const isError   = [kpis, tripsHour, revenueHour, tripsDay, distFare, tipsDist, hotspots].some(d => d.error);

  return {
    kpis: kpis.data,
    tripsHour: tripsHour.data,
    revenueHour: revenueHour.data,
    tripsDay: tripsDay.data,
    distFare: distFare.data,
    tipsDist: tipsDist.data,
    hotspots: hotspots.data,
    isLoading,
    isError,
  };
}
