export const kpiData = {
  totalTrips: "7.3M",
  totalRevenue: "$98.2M",
  avgFare: "$16.02",
  tipRate: "61.2%",
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
  { text: "Short trips (<3 mi) make up the bulk of NYC rides", highlight: "Short trips", color: "accent" as const },
  { text: "Evening surge: 6–10 PM is peak demand", highlight: "6–10 PM", color: "primary" as const },
  { text: "Thu–Sat are the 3 busiest days of the week", highlight: "Thu–Sat", color: "accent" as const },
  { text: "40% of rides have zero tip recorded", highlight: "40%", color: "accent" as const },
  { text: "Midtown & JFK/LGA airports dominate pickup maps", highlight: "Midtown & JFK/LGA", color: "primary" as const },
];
