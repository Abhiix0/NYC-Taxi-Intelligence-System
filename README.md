# 🚕 NYC Taxi Intelligence System (NTIS)

A full-stack data analytics dashboard transforming **7.3 million NYC taxi trips** into an interactive, insight-driven visual experience.

Built to compare traditional analytics workflows (Python EDA + Power BI) with a custom-built React dashboard — emphasizing real-time data loading, modular architecture, and scalable frontend data pipelines.

---

## ✨ Features

- **Interactive Dashboard** — KPI cards, hourly charts, weekly flow, fare analysis, tip distribution, and a geospatial heatmap
- **Sketch Aesthetic** — Hand-drawn post-it note design system with animated charts
- **Dark Mode** — Full theme toggle between light (paper) and dark (charcoal) modes
- **Modular Data Pipeline** — Python → CSV → React, cleanly separated
- **Power BI Comparison** — Screenshot of equivalent Power BI dashboard included

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Data Cleaning | Python, pandas |
| EDA | Jupyter, seaborn, matplotlib |
| Export Pipeline | Python (pandas aggregations) |
| Frontend | React 18, Vite, TypeScript |
| Charts | Recharts |
| Styling | Tailwind CSS, shadcn/ui |
| CSV Parsing | PapaParse |
| State | TanStack Query v5 |

---

## 📁 Project Structure

```
NTIS/
├── Notebooks/
│   ├── 01_cleaning.ipynb     # Data cleaning: 12.4M → 7.3M rows
│   └── 02_eda.ipynb          # Exploratory analysis with findings
├── src/
│   └── export_frontend.py    # Generates 7 aggregated CSVs
├── scripts/
│   └── build_data.sh         # End-to-end pipeline automation
├── Data/
│   ├── raw/                  # Place raw CSVs here (not committed)
│   ├── cleaned/              # Cleaned dataset (not committed)
│   └── frontend/             # Aggregated output CSVs
├── Dashboards/
│   ├── NYC_web/              # React + Vite frontend
│   │   ├── public/data/      # CSV files served to frontend
│   │   └── src/
│   │       ├── components/dashboard/  # Chart components
│   │       ├── hooks/                 # Data fetching hooks
│   │       ├── lib/                   # Utilities
│   │       └── pages/                 # Route pages
│   └── powerbi/
│       └── Dashboard.png     # Power BI comparison screenshot
├── Reports/
│   └── insights.md           # Key findings from EDA
└── requirements.txt          # Python dependencies
```

---

## ⚙️ Prerequisites

- Python 3.11+
- Node.js 18+ / Bun
- pip

---

## 🚀 Data Pipeline

Run the full pipeline with one command:

```bash
bash scripts/build_data.sh
```

This will:
1. Run `src/export_frontend.py` to generate 7 aggregated CSVs from the cleaned data
2. Copy the CSVs to `Dashboards/NYC_web/public/data/`
3. Verify all 7 files are present

> If `Data/cleaned/cleaned_taxi_data.csv` is not present, the script skips the Python step and copies existing `Data/frontend/` CSVs directly.

To regenerate from raw data:
1. Place raw CSVs in `Data/raw/`
2. Run `Notebooks/01_cleaning.ipynb`
3. Run `bash scripts/build_data.sh`

---

## 🖥️ Running the Dashboard

```bash
cd Dashboards/NYC_web
npm install       # or: bun install
npm run dev       # or: bun dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 📊 Data Files (public/data/)

| File | Rows | Description |
|---|---|---|
| `kpis.csv` | 1 | Total trips, revenue, avg fare, tip rate |
| `trips_by_hour.csv` | 24 | Trip count per hour of day |
| `revenue_by_hour.csv` | 24 | Revenue per hour of day |
| `trips_by_day.csv` | 7 | Trip count per day of week |
| `distance_fare.csv` | 9 | Avg fare by distance bucket |
| `tips_dist.csv` | 4 | Trip count by tip category |
| `map_hotspots.csv` | 50 | Top pickup lat/lng coordinates |

---

## 🔑 Key Findings

- Evening peak demand at **hour 18–20** (6–8 PM)
- **Saturday** is the busiest day (1.35M trips)
- **40%** of trips show $0 recorded tip (includes cash payments)
- Fare-distance correlation: **r ≈ 0.88**
- **Midtown Manhattan** dominates pickup density

See [`Reports/insights.md`](Reports/insights.md) for full analysis.
