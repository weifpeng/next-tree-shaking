import React, { useEffect, useRef } from "react";
//@ts-ignore
import * as echarts from "echarts";

interface IBackgroundLineChartProps {
  data: Array<{ date: string; value: number }>;
  startDate?: string;
  endDate?: string;
}

export const BackgroundLineChart: React.FC<IBackgroundLineChartProps> = ({
  data,
  startDate,
  endDate,
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // use start date and end date fill data
    let chartData = data;
    if (startDate && endDate) {
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();
      const day = 24 * 60 * 60 * 1000;
      const days = Math.floor((end - start) / day);
      const newData = [];
      for (let i = 0; i < days; i++) {
        const date = new Date(start + i * day);
        const dateStr = `${date.getFullYear()}-${`${date.getMonth()}`.padStart(
          2,
          "0"
        )}-${`${date.getDate()}`.padStart(2, "0")}`;
        const find = data.find((item) => item.date === dateStr);
        newData.push({
          date: dateStr,
          value: find?.value ?? 0,
        });
      }
      chartData = newData;
    }

    // sort chartData by date
    chartData.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    console.log("chat data", chartData, startDate, endDate, data);

    const chart = echarts.init(chartRef.current);
    chart.setOption({
      xAxis: {
        type: "category",
        data: chartData.map((item) => item.date),
        show: false,
        boundaryGap: false,
      },
      yAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          data: chartData.map((item) =>
            item.value <= 0 ? -1 * item.value : 0
          ),
          type: "line",
          symbol: "none",
          smooth: true,
          areaStyle: {},
          name: "支出",
        },
        {
          data: chartData.map((item) => (item.value > 0 ? item.value : 0)),
          type: "line",
          symbol: "none",
          smooth: true,
          areaStyle: {},
          name: "收入",
        },
      ],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      tooltip: {
        trigger: "axis",
        formatter: (params: any) => {
          const date = params[0].name;
          const values = params.map((item: any) => {
            const prefix = item.seriesIndex === 0 ? "-" : "";
            return `${item.seriesName}: ${prefix}${item.value}`;
          });
          return `${date}<br>${values.join("<br>")}`;
        },
      },
    });
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};
