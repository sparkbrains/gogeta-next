import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  LineElement,
  PointElement,
  ArcElement,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph({ dataPrice,colorArray, val }: any) {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        borderRadius: 20,
        borderSkipped: false,
        backgroundColor: 'c0d2b6',
      },
    ],
  })
  useEffect(() => {
    setData({
      labels: dataPrice?.map((d: number) => ''),
      datasets: [
        {
          label: 'Dataset 1',
          data: dataPrice,
          borderRadius: 20,
          borderSkipped: false,
          backgroundColor: colorArray,
        },
      ],
    })
  }, [dataPrice, val])
  const options: any = {
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: {
        color: 'red',
      },
      tooltip: {
        enabled: false,
        titleColor: 'red',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        bodyColor: 'green',
        displayColors: false,
        yAlign: 'bottom',
      },
    },
    scales: {
      y: {
        display:false,
          beginAtZero: true
        },
        x:{
        display:false
        }
    },
  };
  return <Bar
    options={options}
    data={data}
  />
}