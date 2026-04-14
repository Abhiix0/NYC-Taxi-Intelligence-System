"""
Generates frontend-ready CSV files from the cleaned taxi dataset.
Run from the project root: python src/export_frontend.py
"""
import pandas as pd
import os

CLEANED_PATH = "Data/cleaned/cleaned_taxi_data.csv"
OUT_DIR = "Data/frontend"

print("Loading cleaned dataset (this may take a moment)...")
df = pd.read_csv(CLEANED_PATH, low_memory=False)

# Parse datetime and derive grouping columns
df["tpep_pickup_datetime"] = pd.to_datetime(df["tpep_pickup_datetime"], errors="coerce")
df["pickup_hour"] = df["tpep_pickup_datetime"].dt.hour
df["day_of_week"] = df["tpep_pickup_datetime"].dt.day_name()

os.makedirs(OUT_DIR, exist_ok=True)
print(f"Loaded {df.shape[0]:,} rows\n")

# 1. trips_by_hour
trips_by_hour = (
    df.groupby("pickup_hour", sort=True)
    .size()
    .reset_index(name="trip_count")
)
trips_by_hour.to_csv(f"{OUT_DIR}/trips_by_hour.csv", index=False)
print(f"✓ trips_by_hour.csv       → {len(trips_by_hour)} rows")

# 2. revenue_by_hour
revenue_by_hour = (
    df.groupby("pickup_hour", sort=True)["total_amount"]
    .sum()
    .round(2)
    .reset_index(name="total_revenue")
)
revenue_by_hour.to_csv(f"{OUT_DIR}/revenue_by_hour.csv", index=False)
print(f"✓ revenue_by_hour.csv     → {len(revenue_by_hour)} rows")

# 3. trips_by_day
DAY_ORDER = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
trips_by_day = (
    df.groupby("day_of_week", sort=False)
    .size()
    .reset_index(name="trip_count")
)
trips_by_day["day_of_week"] = pd.Categorical(
    trips_by_day["day_of_week"], categories=DAY_ORDER, ordered=True
)
trips_by_day = trips_by_day.sort_values("day_of_week").reset_index(drop=True)
trips_by_day.to_csv(f"{OUT_DIR}/trips_by_day.csv", index=False)
print(f"✓ trips_by_day.csv        → {len(trips_by_day)} rows")

# 4. distance_fare
distance_fare = (
    df.assign(distance_bucket=df["trip_distance"].round())
    .groupby("distance_bucket", sort=True)["fare_amount"]
    .mean()
    .round(2)
    .reset_index(name="avg_fare")
    .rename(columns={"distance_bucket": "distance_miles"})
)
distance_fare.to_csv(f"{OUT_DIR}/distance_fare.csv", index=False)
print(f"✓ distance_fare.csv       → {len(distance_fare)} rows")

# 5. tips_dist
def tip_category(tip):
    if tip == 0:
        return "No Tip"
    elif tip < 2:
        return "Low (<$2)"
    elif tip < 5:
        return "Medium ($2-$5)"
    else:
        return "High ($5+)"

CAT_ORDER = ["No Tip", "Low (<$2)", "Medium ($2-$5)", "High ($5+)"]
tips_dist = df["tip_amount"].apply(tip_category).value_counts().reset_index()
tips_dist.columns = ["tip_category", "trip_count"]
tips_dist["tip_category"] = pd.Categorical(
    tips_dist["tip_category"], categories=CAT_ORDER, ordered=True
)
tips_dist = tips_dist.sort_values("tip_category").reset_index(drop=True)
tips_dist.to_csv(f"{OUT_DIR}/tips_dist.csv", index=False)
print(f"✓ tips_dist.csv           → {len(tips_dist)} rows")

# 6. map_data — 50k sampled pickup coords within NYC bounding box
map_cols = ["pickup_latitude", "pickup_longitude"]
valid_map = df[map_cols].dropna()
nyc_mask = (
    valid_map["pickup_latitude"].between(40.4, 41.0)
    & valid_map["pickup_longitude"].between(-74.3, -73.6)
)
map_data = (
    valid_map[nyc_mask]
    .sample(n=min(50_000, int(nyc_mask.sum())), random_state=42)
    .reset_index(drop=True)
)
map_data.to_csv(f"{OUT_DIR}/map_data.csv", index=False)
print(f"✓ map_data.csv            → {len(map_data)} rows")

print(f"\nAll files saved to {OUT_DIR}/")
