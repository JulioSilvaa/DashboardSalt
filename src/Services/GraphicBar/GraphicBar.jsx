import React from "react";
import Chart from "react-apexcharts";

export const GraphicBar = () => {
  const xaxis = {
    categories: [
      "South Korea",
      "Canada",
      "United Kingdom",
      "Netherlands",
      "Italy",
      "France",
      "Japan",
      "United States",
      "China",
      "Germany",
    ],
  };

  const series = [
    {
      name: "crescimento anual",
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  const options = {
    chart: {
      id: "basic-bar",
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis,
  };
  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="100%"
      />
    </>
  );
};
