# NYC Taxi Intelligence System (NTIS)

Full-stack data analytics dashboard for 12.4M NYC taxi trips.

## Stack

- Python (pandas) — data cleaning and aggregation
- React + Vite + TypeScript — frontend dashboard
- Recharts — charts
- PapaParse — CSV parsing

## Prerequisites

- Python 3.9+ with pandas installed (see requirements.txt)
- Node.js 18+ or Bun

## Data Pipeline

1. Place raw CSVs in Data/raw/ (yellow_tripdata_2015-01 through 04)
2. Run Notebooks/01_cleaning.ipynb to produce Data/cleaned/cleaned_taxi_data.csv
3. Run the export pipeline: bash scripts/build_data.sh
4. This produces 7 aggregated CSVs in Dashboards/NYC_web/public/data/

## Running the Dashboard

```
cd Dashboards/NYC_web
npm install    # or: bun install
npm run dev    # or: bun dev
```

Open http://localhost:8080

## Project Structure

```
Notebooks/          — data cleaning and EDA
src/                — Python export pipeline
Data/frontend/      — aggregated CSV outputs
Dashboards/NYC_web/ — React frontend
scripts/            — automation scripts
```
