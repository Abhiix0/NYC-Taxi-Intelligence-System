# NYC Taxi Intelligence System (NTIS)

The NYC Taxi Intelligence System (NTIS) is an end-to-end data analytics project that transforms large-scale raw taxi trip data into structured insights and interactive visualizations.

This project demonstrates the complete data lifecycle — from data ingestion and cleaning to exploratory analysis and deployment of a production-ready web dashboard.

---

## Overview

New York City generates millions of taxi trips, producing a rich dataset for analyzing urban mobility patterns. This project focuses on extracting meaningful insights related to:

- Temporal demand patterns
- Revenue trends
- Distance-to-fare relationships
- Tipping behavior
- Geographic concentration of trips

The final deliverable is an interactive web-based dashboard supported by efficient data pipelines and optimized frontend architecture.

---

## Key Features

- End-to-end data pipeline (raw data to visualization)
- Efficient handling of large datasets using preprocessing
- Interactive web dashboard with real map integration
- Time-based and behavioral analytics
- Clean and scalable project architecture

---

## Project Structure

```

NYC Taxi Intelligence System/
│
├── Data/
│   ├── raw/                # Original dataset files
│   ├── cleaned/            # Processed dataset
│   └── frontend/           # Aggregated data for frontend
│
├── notebooks/
│   ├── 01_cleaning.ipynb   # Data cleaning pipeline
│   └── 02_eda.ipynb        # Exploratory data analysis
│
├── Dashboards/
│   ├── PowerBI/            # Power BI dashboard files
│   └── NYC_web/            # React-based web dashboard
│       ├── public/data/    # Static CSV files for frontend
│       └── src/            # Source code
│
└── README.md

````

---

## Technology Stack

### Data Processing
- Python (Pandas, NumPy)
- Jupyter Notebook

### Visualization
- Power BI

### Web Application
- React (TypeScript)
- Vite
- Tailwind CSS
- Recharts
- Leaflet
- PapaParse

---

## Data Pipeline

### Data Cleaning
- Standardized inconsistent column names
- Removed null and invalid values
- Filtered out unrealistic coordinates and outliers
- Optimized dataset size for processing

### Feature Engineering
- Derived key attributes such as:
  - Pickup hour
  - Day of week
- Enabled time-based analysis

### Aggregation for Frontend

To ensure performance, the dataset is transformed into lightweight aggregated files:

| File | Description |
|------|------------|
| trips_by_hour.csv | Number of trips per hour |
| revenue_by_hour.csv | Revenue aggregated by hour |
| trips_by_day.csv | Trip counts per weekday |
| distance_fare.csv | Average fare by distance |
| tips_dist.csv | Distribution of tip amounts |
| map_data.csv | Sampled geographic coordinates |

---

## Frontend Architecture

The frontend is designed for performance and scalability:

- Aggregated CSV files are stored in `/public/data`
- Data is fetched dynamically using a custom React hook
- Parsing is handled using PapaParse
- Avoids loading large raw datasets in the browser

This approach ensures:

- Fast load times
- Low memory consumption
- Maintainable and scalable structure

---

## Map Visualization

- Built using Leaflet
- Uses real-world map tiles
- Displays trip density through marker overlays
- Coordinates filtered to valid NYC bounds

---

## Key Insights

- Peak demand occurs during evening hours (approximately 5 PM to 10 PM)
- Higher trip volumes are observed on weekends, particularly Friday and Saturday
- Fare values show a direct correlation with trip distance
- A significant portion of trips include low or no tips
- Trip density is highest in central urban regions such as Manhattan

---

## Running the Project Locally

```bash
git clone <repository-url>
cd Dashboards/NYC_web
npm install
npm run dev
````

The application will be available at:

```
http://localhost:5173
```

---

## Deployment

The web dashboard can be deployed using platforms such as:

* Vercel
* Netlify
* Render

Ensure that the `/public/data` directory is included in the deployment to allow access to CSV files.

---

## Future Enhancements

* Heatmap-based geographic visualization
* Advanced filtering (time ranges, zones)
* Real-time data integration
* Predictive analytics using machine learning
* Enhanced interactivity and user controls

---

## Author

Abhiix0
