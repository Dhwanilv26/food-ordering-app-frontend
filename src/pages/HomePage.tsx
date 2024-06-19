import React from 'react';
import limg from '../models/img1.png';
import adimg from '../models/img2.png';
import SearchBar, { SearchForm } from '@/components/SearchBar';
import { useNavigate } from 'react-router-dom';
import DataInfo from '@/components/DataInfo';
import LiveMap from '@/components/LiveMap';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate(`/search/${searchFormValues.searchQuery}`);
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-12'>
        <div className='md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
          <h1 className='text-5xl font-bold tracking-tight text-green-500'>Tuck into a takeaway today</h1>
          <span className='text-xl text-blue-500 font-bold tracking-tighter'>Food is just a click away!</span>
          <SearchBar placeHolder='Search by City or Town' onSubmit={handleSearchSubmit} />
        </div>
      </div>

      <LiveMap />

      <div className='mt-12'>
        <DataInfo
          title='Food Delivery Dashboard'
          metrics={[
            { label: 'Total Orders', value: 1200 },
            { label: 'Active Users', value: 500 },
            { label: 'Average Delivery Time', value: '30 mins' },
            { label: 'Customer Satisfaction', value: '4.8/5' },
            { label: 'Restaurants Available', value: 150 },
          ]}
        />
      </div>

      <div className='grid md:grid-cols-2 gap-5 mt-12'>
        <div>
          <img src={limg} alt='Takeaway Image' className='w-full' />
        </div>

        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span className='font-bold text-3xl tracking-tighter text-green-500'>Order takeaway even faster!</span>
          <span className='font-bold text-blue-400'>
            Download the KhaanaKart App for faster ordering and personalised recommendations.
          </span>
          <img src={adimg} alt='App Advertisement' className='w-full' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
