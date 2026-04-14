#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
FRONTEND_PUBLIC="$PROJECT_ROOT/Dashboards/NYC_web/public/data"

echo "=== NTIS Data Pipeline ==="

echo "Step 1: Running export_frontend.py..."
cd "$PROJECT_ROOT"
python src/export_frontend.py

echo "Step 2: Copying to frontend public/data/..."
mkdir -p "$FRONTEND_PUBLIC"
cp Data/frontend/*.csv "$FRONTEND_PUBLIC/"

echo "Step 3: Verifying output files..."
for f in trips_by_hour revenue_by_hour trips_by_day distance_fare tips_dist kpis map_hotspots; do
  if [ ! -f "$FRONTEND_PUBLIC/${f}.csv" ]; then
    echo "ERROR: Missing ${f}.csv in public/data/"
    exit 1
  fi
done

echo "✓ Pipeline complete. All 7 CSV files ready in $FRONTEND_PUBLIC"
