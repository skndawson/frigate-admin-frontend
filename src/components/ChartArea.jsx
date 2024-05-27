'use client';
import { AreaChart } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 22',
    Cartera: 2890,
    'Socios': 2338,
  },
  {
    date: 'Feb 22',
    Cartera: 2756,
    'Socios': 2103,
  },
  {
    date: 'Mar 22',
    Cartera: 3322,
    'Socios': 2194,
  },
  {
    date: 'Apr 22',
    Cartera: 3470,
    'Socios': 2108,
  },
  {
    date: 'May 22',
    Cartera: 3475,
    'Socios': 1812,
  },
  {
    date: 'Jun 22',
    Cartera: 3129,
    'Socios': 1726,
  },
  {
    date: 'Jul 22',
    Cartera: 3490,
    'Socios': 1982,
  },
  {
    date: 'Aug 22',
    Cartera: 2903,
    'Socios': 2012,
  },
  {
    date: 'Sep 22',
    Cartera: 2643,
    'Socios': 2342,
  },
  {
    date: 'Oct 22',
    Cartera: 2837,
    'Socios': 2473,
  },
  {
    date: 'Nov 22',
    Cartera: 2954,
    'Socios': 3848,
  },
  {
    date: 'Dec 22',
    Cartera: 3239,
    'Socios': 3736,
  },
];

const valueFormatter = function (number) {
  return '$ ' + new Intl.NumberFormat('us').format(number).toString();
};

export function ChartArea() {
  return (
    <>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={['Cartera', 'Socios']}
        colors={['indigo', 'cyan']}
        valueFormatter={valueFormatter}
        xAxisLabel="Month of Year"
        yAxisLabel="Revenue (USD)"
        showGridLines={false}
      />
    </>
  );
}