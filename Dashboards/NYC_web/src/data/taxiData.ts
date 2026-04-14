export const kpiData = {
  totalTrips: "12.4M",
  totalRevenue: "$198.7M",
  avgFare: "$16.02",
  tipRate: "18.3%",
};

export const tripsByHour = [
  { hour: "12am", trips: 8200 }, { hour: "1am", trips: 5100 }, { hour: "2am", trips: 3800 },
  { hour: "3am", trips: 2900 }, { hour: "4am", trips: 2400 }, { hour: "5am", trips: 3600 },
  { hour: "6am", trips: 7800 }, { hour: "7am", trips: 14200 }, { hour: "8am", trips: 18900 },
  { hour: "9am", trips: 17400 }, { hour: "10am", trips: 15600 }, { hour: "11am", trips: 16100 },
  { hour: "12pm", trips: 17800 }, { hour: "1pm", trips: 18200 }, { hour: "2pm", trips: 19100 },
  { hour: "3pm", trips: 20400 }, { hour: "4pm", trips: 22100 }, { hour: "5pm", trips: 25800 },
  { hour: "6pm", trips: 27200 }, { hour: "7pm", trips: 24600 }, { hour: "8pm", trips: 21300 },
  { hour: "9pm", trips: 18900 }, { hour: "10pm", trips: 15200 }, { hour: "11pm", trips: 11400 },
];

export const revenueByHour = tripsByHour.map((d) => ({
  hour: d.hour,
  revenue: Math.round(d.trips * 16.02),
}));

export const tripsByDay = [
  { day: "Monday", trips: 1720000 },
  { day: "Tuesday", trips: 1780000 },
  { day: "Wednesday", trips: 1810000 },
  { day: "Thursday", trips: 1920000 },
  { day: "Friday", trips: 2080000 },
  { day: "Saturday", trips: 1890000 },
  { day: "Sunday", trips: 1200000 },
];

export const distanceVsFare = [
  { distance: 0.5, fare: 5.5 }, { distance: 1, fare: 7.2 }, { distance: 2, fare: 10.1 },
  { distance: 3, fare: 13.5 }, { distance: 5, fare: 18.8 }, { distance: 7, fare: 24.2 },
  { distance: 10, fare: 32.1 }, { distance: 15, fare: 44.5 }, { distance: 20, fare: 55.8 },
];

export const tipsDistribution = [
  { range: "$0", count: 34 }, { range: "$1-2", count: 12 },
  { range: "$2-5", count: 22 }, { range: "$5-10", count: 18 },
  { range: "$10-15", count: 9 }, { range: "$15+", count: 5 },
];

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
