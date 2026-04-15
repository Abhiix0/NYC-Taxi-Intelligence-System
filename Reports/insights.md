# NTIS — Key Insights Report

**Dataset:** NYC Yellow Taxi Trip Records (Jan 2015 – Mar 2016)  
**Cleaned Rows:** ~7.3 million trips  
**Generated:** From EDA notebook analysis

---

## 1. Demand Patterns

### Hourly

Peak demand occurs at **6–8 PM** (hour 18–20), with 465K–453K trips per hour.
Morning commute peaks around 8–9 AM (~318K–334K trips/hour).
Overnight demand (midnight–4 AM) remains at 15–25% of peak — driven by nightlife.

### Weekly

Saturday is the single busiest day (1.35M trips), closely followed by Friday (1.28M) and Thursday (1.26M).
Monday–Tuesday are the quietest weekdays (~756K–806K trips).

---

## 2. Revenue Distribution

Total estimated revenue across the dataset: **~$98M**.
Revenue closely mirrors demand — both peak at the same evening hours.
The 6 PM hour generates the most total revenue, driven by high trip volume combined with slightly longer trip distances (post-work commutes to residential areas).

---

## 3. Fare Structure

Average fare: **$16.02**

Fares scale linearly with distance (r ≈ 0.88).
Notable anomaly: a cluster of $52 fares represents the flat-rate JFK–Manhattan route.
Very short trips (< 1 mile) average $4–$7, reflecting the minimum fare + base charge.

---

## 4. Tipping Behavior

**~40% of trips show $0 recorded tip.**

This is partially a data artifact — cash tips are not recorded in the dataset, only credit card tips.
Among verified credit card payers: tipping rate is significantly higher.

Tip breakdown:
- No Tip: 2,925,868 trips (40%)
- Low tip (< $2): 2,182,126 trips (30%)
- Medium tip ($2–$5): 1,786,966 trips (24%)
- High tip (> $5): 416,604 trips (6%)

---

## 5. Geospatial Insights

**Top pickup zones:**
1. Midtown Manhattan (Times Square, Grand Central, Penn Station)
2. Upper East Side
3. JFK International Airport
4. LaGuardia Airport
5. Financial District / Lower Manhattan

Outer boroughs (Brooklyn, Queens, Bronx, Staten Island) collectively account for less than 10% of pickups.

---

## 6. Anomalies & Data Quality Notes

- The `tip_amount` column only captures electronic tips — cash tips are $0 by definition.
- A small number of extreme-distance trips (> 50 miles) were filtered during cleaning.
- The 2015 dataset uses `RateCodeID` while 2016 uses `RatecodeID` — column normalization was applied.
- JFK flat-rate fares ($52) create an anomalous cluster in the fare distribution.

---

## 7. Comparison: Custom Dashboard vs Power BI

| Dimension | Custom React Dashboard | Power BI |
|---|---|---|
| Setup time | Medium (data pipeline + frontend) | Low (drag-and-drop) |
| Customization | Full (pixel-perfect design) | Limited (theme/style locked) |
| Interactivity | High (custom SVG map, hover states) | Medium |
| Data refresh | Manual pipeline run | Scheduled or manual |
| Aesthetic control | Total | Template-bound |
| Deployment | Any static host | Power BI Service |

**Conclusion:** The custom dashboard wins on design flexibility and storytelling. Power BI wins on rapid setup and enterprise collaboration features.
