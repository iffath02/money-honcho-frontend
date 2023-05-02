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
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#8e5ea2",
          "#3cba9f",
        ],
      },
    ],
  }

  return <Pie data={chartData} />
}

export default PieChart
