import React, { useState, useEffect } from 'react';
import innovation from '../../images/Innovation_Centre2.jpg'
import Tooltip from '../../components/Tooltip';
import RealtimeChart from '../../charts/RealtimeChart';
import '../community/main.css';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard09() {

  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest

  
  // const [counter, setCounter] = useState(0);
  // const [increment, setIncrement] = useState(0);
  // const [range, setRange] = useState(35);

  
  // const data = [
  //   57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87,
  //   53.73, 56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25,
  //   65.91, 64.44, 65.97, 62.27, 60.96, 59.34, 55.07, 59.85, 53.79, 51.92,
  //   50.95, 49.65, 48.09, 49.81, 47.85, 49.52, 50.21, 52.22, 54.42, 53.42,
  //   50.91, 58.52, 53.37, 57.58, 59.09, 59.36, 58.71, 59.42, 55.93, 57.71,
  //   50.62, 56.28, 57.37, 53.08, 55.94, 55.82, 53.94, 52.65, 50.25,
  // ];

  // const [slicedData, setSlicedData] = useState(data.slice(0, range));

  
  // const generateDates = () => {
  //   const now = new Date();
  //   const dates = [];
  //   data.forEach((v, i) => {
  //     dates.push(new Date(now - 2000 - i * 2000));
  //   });
  //   return dates;
  // };

  // const [slicedLabels, setSlicedLabels] = useState(generateDates().slice(0, range).reverse());

  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter(counter + 1);
  //   }, 2000);
  //   return () => clearInterval(interval)
  // }, [counter]);

  
  // useEffect(() => {
  //   setIncrement(increment + 1);
  //   if (increment + range < data.length) {
  //     setSlicedData(([x, ...slicedData]) => [...slicedData, data[increment + range]]);
  //   } else {
  //     setIncrement(0);
  //     setRange(0);
  //   }
  //   setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()]);
  //   return () => setIncrement(0)
    
  // }, [counter]);

  // const chartData = {
  //   labels: slicedLabels,
  //   datasets: [
  //     // Indigo line
  //     {
  //       data: slicedData,
  //       fill: true,
  //       backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
  //       borderColor: tailwindConfig().theme.colors.indigo[500],
  //       borderWidth: 2,
  //       tension: 0,
  //       pointRadius: 0,
  //       pointHoverRadius: 3,
  //       pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
  //       clip: 20,
  //     },
  //   ],
  // };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-gradient shadow-lg rounded-sm">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-bold text-indigo-500">We Support You, Keep Innovating !!</h2>
        
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {/* <RealtimeChart data={chartData} width={595} height={248} /> */}
      <img className="ml-1" src={innovation} width="538" height="60" alt="innovation" />
    </div>
  );
}

export default DashboardCard09;
