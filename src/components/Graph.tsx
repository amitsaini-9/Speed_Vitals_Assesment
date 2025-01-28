import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

interface GraphProps {
  metric: string;
  device: string;
}

interface ApiResponse {
  timeseries: number[];
  values: number[];
}

const Graph: React.FC<GraphProps> = ({ metric, device }) => {
  const [chartOptions, setChartOptions] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGraphData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${device}`
        );
        const data: ApiResponse = await response.json();
        console.log("API Response:", data);

        const xData = data.timeseries || [];
        const yData = data.values || [];

        console.log("X Data:", xData);
        console.log("Y Data:", yData);

        setChartOptions({
          title: {
            text: `${metric.toUpperCase()} - ${device.toUpperCase()}`,
            left: "center",
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: xData,
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: yData,
              type: "line",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching graph data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGraphData();
  }, [metric, device]);

  return (
    <div className="w-full h-96 border p-4 rounded-md shadow-md">
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <ReactECharts
          option={chartOptions}
          style={{ height: "100%", width: "100%" }}
        />
      )}
    </div>
  );
};

export default Graph;
