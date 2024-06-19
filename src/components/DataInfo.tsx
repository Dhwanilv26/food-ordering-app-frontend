import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ResponsiveLine, Serie } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { FC } from 'react';
import { PackageIcon } from 'lucide-react';
import { BarChartIcon } from 'lucide-react';
import { DollarSignIcon } from 'lucide-react';
import { TruckIcon } from 'lucide-react';
import StarRating from './StarRating';
interface Metric {
  label: string;
  value: number | string;
}

// Define the interface for DataInfo props
interface DataInfoProps {
  title: string;
  metrics: Metric[];
}
const DataInfo: React.FC<DataInfoProps> = () => {
  return (
    <div className='flex flex-col h-full w-full bg-[#f8f4e3] dark:bg-[#f0f8ff] p-6 md:p-10'>
      <header className='flex items-center justify-between mb-6'>
        <div>
          <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>Food Delivery Dashboard</h1>
          <p className='text-gray-600 dark:text-gray-400'>Key metrics and performance of your food delivery app.</p>
        </div>
      </header>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Card className='relative overflow-hidden bg-white dark:bg-gray-800'>
          <CardHeader className='flex items-center justify-between'>
            <CardTitle>Total Orders</CardTitle>
            <PackageIcon className='w-6 h-6 text-gray-600 dark:text-gray-400' />
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold'>12,345</div>
            <p className='text-gray-600 dark:text-gray-400'>+15% from last month</p>
          </CardContent>
          <LineChart className='w-full h-[300px] bg-[#f8f4e3] dark:bg-[#f0f8ff]' />
        </Card>
        <Card className='relative overflow-hidden bg-white dark:bg-gray-800'>
          <CardHeader className='flex items-center justify-between'>
            <CardTitle>Order Growth Rate</CardTitle>
            <BarChartIcon className='w-6 h-6 text-gray-600 dark:text-gray-400' />
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold'>8.2%</div>
            <p className='text-gray-600 dark:text-gray-400'>+2.1% from last month</p>
          </CardContent>
          <LineChart className='w-full h-[300px] bg-[#f8f4e3] dark:bg-[#f0f8ff]' />
        </Card>
        <Card className='relative overflow-hidden bg-white dark:bg-gray-800'>
          <CardHeader className='flex items-center justify-between'>
            <CardTitle>Average Order Value</CardTitle>
            <DollarSignIcon className='w-6 h-6 text-gray-600 dark:text-gray-400' />
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold'>$24.99</div>
            <p className='text-gray-600 dark:text-gray-400'>+3.5% from last month</p>
          </CardContent>
          <LineChart className='w-full h-[300px] bg-[#f8f4e3] dark:bg-[#f0f8ff]' />
        </Card>
        <Card className='relative overflow-hidden bg-white dark:bg-gray-800'>
          <CardHeader className='flex items-center justify-between'>
            <CardTitle>Customer Satisfaction</CardTitle>
            <StarRating percentage={96} />
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold'>4.8/5</div>
            <p className='text-gray-600 dark:text-gray-400'>+0.2 from last month</p>
          </CardContent>
          <LineChart className='w-full h-[300px] bg-[#f8f4e3] dark:bg-[#f0f8ff]' />
        </Card>
        <Card className='relative overflow-hidden bg-white dark:bg-gray-800'>
          <CardHeader className='flex items-center justify-between'>
            <CardTitle>Delivery Times</CardTitle>
            <TruckIcon className='w-6 h-6 text-gray-600 dark:text-gray-400' />
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold'>30 min</div>
            <p className='text-gray-600 dark:text-gray-400'>-2 min from last month</p>
          </CardContent>
          <TimeseriesChart className='w-full h-[300px] bg-[#f8f4e3] dark:bg-[#f0f8ff]' />
        </Card>
        <Card className='col-span-1 md:col-span-2 lg:col-span-3 relative overflow-hidden bg-white dark:bg-gray-800 mb -5 '>
          <CardHeader className='flex items-center justify-between '>
            <CardTitle>Order Volume by Category</CardTitle>
            <BarChartIcon className='w-6 h-6 text-gray-600 dark:text-gray-400 mb-4 ' />
          </CardHeader>
          <BarChart className='w-full h-[500px] bg-[#f8f4e3] dark:bg-[#f0f8ff] ' />
        </Card>
      </div>
    </div>
  );
};

export default DataInfo;

// Type definitions for the charts

interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {}

const BarChart: FC<BarChartProps> = (props) => {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: 'Jan', count: 111 },
          { name: 'Feb', count: 157 },
          { name: 'Mar', count: 129 },
          { name: 'Apr', count: 150 },
          { name: 'May', count: 119 },
          { name: 'Jun', count: 72 },
        ]}
        keys={['count']}
        indexBy='name'
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={['#2563eb']}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={5}
        maxValue={200}
        theme={{
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role='application'
        ariaLabel='A bar chart showing data'
      />
    </div>
  );
};

interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {}

const LineChart: FC<LineChartProps> = (props) => {
  const data: Serie[] = [
    {
      id: 'Desktop',
      data: [
        { x: 'Jan', y: 43 },
        { x: 'Feb', y: 137 },
        { x: 'Mar', y: 61 },
        { x: 'Apr', y: 145 },
        { x: 'May', y: 26 },
        { x: 'Jun', y: 154 },
      ],
    },
    {
      id: 'Mobile',
      data: [
        { x: 'Jan', y: 60 },
        { x: 'Feb', y: 48 },
        { x: 'Mar', y: 177 },
        { x: 'Apr', y: 78 },
        { x: 'May', y: 96 },
        { x: 'Jun', y: 204 },
      ],
    },
  ];

  return (
    <div {...props}>
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 'auto',
          stacked: false,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        enablePoints={false}
        enableSlices='x'
        useMesh
        enableGridX={false}
        colors={['#2563eb', '#10b981']}
        theme={{
          tooltip: {
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        role='application'
      />
    </div>
  );
};

interface TimeseriesChartProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimeseriesChart: FC<TimeseriesChartProps> = (props) => {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: 'series1',
            data: [
              { x: 'Jan', y: 111 },
              { x: 'Feb', y: 129 },
              { x: 'Mar', y: 97 },
              { x: 'Apr', y: 145 },
              { x: 'May', y: 119 },
              { x: 'Jun', y: 60 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        enablePoints={false}
        enableSlices='x'
        useMesh
        enableGridX={false}
        colors={['#2563eb']}
        theme={{
          tooltip: {
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        role='application'
      />
    </div>
  );
};
