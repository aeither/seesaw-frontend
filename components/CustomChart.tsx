import { createChart } from "lightweight-charts";
import { parse } from "node:path";
import { useState, useEffect } from "react";
import useSnapshots from "../hooks/useSnapshots";

interface ChartData {
  base_asset_reserve: string;
  quote_asset_reserve: string;
  base_delta: number;
  timestamp: number;
}
const CoinPriceChart = () => {
  const [isChartCreated, setIsChartCreated] = useState(false);
  const { snapshots, snapshotsLoading } = useSnapshots();

  useEffect(() => {
    console.log("CustomChart useEffect");
    console.log("CustomChart useEffect");
    if (snapshotsLoading) {
      // lineSeries.setData([
      //   { time: "2019-04-11", value: 80.01 },
      //   { time: "2019-04-12", value: 96.63 },
      //   { time: "2019-04-13", value: 76.64 },
      //   { time: "2019-04-14", value: 81.89 },
      //   { time: "2019-04-15", value: 74.43 },
      //   { time: "2019-04-16", value: 80.01 },
      //   { time: "2019-04-17", value: 96.63 },
      //   { time: "2019-04-18", value: 76.64 },
      //   { time: "2019-04-19", value: 81.89 },
      //   { time: "2019-04-20", value: 74.43 },
      // ]);
    } else {
      if (!isChartCreated) {
        const chart = createChart(document.getElementById("chart1"), {
          width: 980,
          height: 610,
          layout: {
            textColor: "#d1d4dc",
            backgroundColor: "#000000",
          },
          rightPriceScale: {
            scaleMargins: {
              top: 0.3,
              bottom: 0.25,
            },
          },
          crosshair: {
            vertLine: {
              color: "rgba(224, 227, 235, 0.1)",
              style: 0,
            },
            horzLine: {
              visible: false,
              labelVisible: false,
            },
          },
          grid: {
            vertLines: {
              color: "rgba(42, 46, 57, 0)",
            },
            horzLines: {
              color: "rgba(42, 46, 57, 0)",
            },
          },
        });
        const lineSeries = chart.addLineSeries();
        setIsChartCreated(true);
        const rawChartData: Array<ChartData> = snapshots.data.snapshots;
        const chartData = rawChartData.map((snapshot) => {
          const date = new Date(snapshot.timestamp / 1000000);
          const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
          const value =
            parseInt(snapshot.base_asset_reserve) /
            parseInt(snapshot.quote_asset_reserve);
          return { time, value };
        });
        lineSeries.setData(chartData);
        console.log("snapshots", chartData);
      }
    }
  }, [snapshots]);

  return <div id="chart1" />;
};

export default CoinPriceChart;
