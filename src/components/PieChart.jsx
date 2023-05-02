import React from "react"
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.category || d.type),
    datasets: [
      {
        data: data.map(d => d.total_amount),
        backgroundColor: [
          "#3cba9f",
          "#d0f0c0",
          "#c71585",
          "#800080",
          "#fdfd96",
        ],
      },
    ],
  }

  return (
    <Pie data={chartData} style={{ maxWidth: "500px", maxHeight: "500px" }} />
  )
}

export default PieChart
