import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';
import '../community/main.css';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  const chartData = {
    labels: ['IT', 'Health-Care', 'FinTech', 'E-Commerce'],
    datasets: [
      {
        label: 'Percentage',
        data: [
          47, 24, 20, 9
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[800],
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.indigo[400],
          tailwindConfig().theme.colors.indigo[200],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[800],
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.indigo[400],
          tailwindConfig().theme.colors.indigo[200],
        ],
        hoverBorderColor: tailwindConfig().theme.colors.white,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-gradient shadow-lg rounded-sm">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-bold text-indigo-500">Startups by Sectors</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard06;
