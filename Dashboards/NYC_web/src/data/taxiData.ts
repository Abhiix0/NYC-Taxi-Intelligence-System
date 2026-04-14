export const kpiData = {
  totalTrips: "12.4M",
  totalRevenue: "$198.7M",
  avgFare: "$16.02",
  tipRate: "18.3%",
};

export const pickupHotspots = [
  { name: "Midtown Manhattan", lat: 40.7549, lng: -73.984, intensity: 95 },
  { name: "Upper East Side", lat: 40.7736, lng: -73.9566, intensity: 72 },
  { name: "Financial District", lat: 40.7074, lng: -74.0113, intensity: 68 },
  { name: "JFK Airport", lat: 40.6413, lng: -73.7781, intensity: 82 },
  { name: "LaGuardia Airport", lat: 40.7769, lng: -73.874, intensity: 75 },
  { name: "Times Square", lat: 40.758, lng: -73.9855, intensity: 90 },
  { name: "Chelsea", lat: 40.7465, lng: -74.0014, intensity: 55 },
  { name: "East Village", lat: 40.7265, lng: -73.9815, intensity: 48 },
  { name: "Williamsburg", lat: 40.7081, lng: -73.9571, intensity: 42 },
  { name: "Harlem", lat: 40.8116, lng: -73.9465, intensity: 35 },
];

export const insights = [
  { text: "Short trips (<3 mi) dominate", highlight: "Short trips", color: "accent" as const },
  { text: "Evening peak: 5–10 PM rush", highlight: "5–10 PM", color: "primary" as const },
  { text: "Thu–Sat are the busiest days", highlight: "Thu–Sat", color: "accent" as const },
  { text: "Low tipping: 34% tip nothing", highlight: "34%", color: "accent" as const },
  { text: "Midtown & airports = hotspots", highlight: "hotspots", color: "primary" as const },
];
