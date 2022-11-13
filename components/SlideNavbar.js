import React from 'react';
import { AiFillAlert } from "react-icons/ai"
import CardHaeder from './CardHaeder';
import MenuLink from './MenuLink';
import PriceList from './PriceList';
import UserTag from './UserTag';


function SlideNavbar() {
  return (
    <div className='flex gap-4'>
      <div className='bg-white min-h-screen w-1/12 text-gray-100 px-1'>
        <div className='py-3 flex flex-col text-center items-center justify-end'>
          <div className='w-14 h-14 rounded-full bg-blue-600'></div>
          <div className='mt-7'>
            <ul className='flex flex-col font-bold text-2xl'>
              <MenuLink name="bx bxs-dashboard" />
              <MenuLink name="bx bx-layer" />
              <MenuLink name="bx bx-wallet" />
              <MenuLink name="bx bx-pie-chart-alt" />
              <MenuLink name="bx bxs-calendar-alt" />
              <MenuLink name="bx bxs-cog" />
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-white min-h-screen w-3/4 text-black px-2 py-1'>
        <div className='flex justify-between align-items-center'>
          <div className='font-thin '>
            <h1 className='text-4xl font-bold '><i className='font-thin'>Hi,</i> Shahin Alam</h1>
            <p className='mt-1'>Lorem Ipsum is simply dummy text of text printing and typesetting industry.</p>
          </div>
          <div className='p-2 flex flex-row align-text-center'>
            <ul className='flex flex-row font-bold text-2xl'>
              <MenuLink name="bx bx-search" />
              <MenuLink name="bx bxs-bell-ring" />

            </ul>
            <div className='flex flex-row items-center ml-1'>
              <div className='w-11 h-11 rounded-full bg-blue-600'></div>
              <i class='bx bx-chevron-down'></i>
            </div>
          </div>
        </div>
        <div className='card card-header flex gap-2 my-2 '>
          <CardHaeder />
          <CardHaeder />
          <CardHaeder />
        </div>
        <div className='chart-paper '>
          <div className='flex container-lg h-auto gap-2'>
            <div className='h-[180px] w-2/3 rounded-lg bg-slate-300'></div>
            <div className='h-[180px] w-1/3 rounded-lg bg-green-300'></div>
          </div>
        </div>
      </div>
      <div className='bg-white min-h-screen w-3/12 text-black p-4'>
        <div className='box-1'>
          <div className='bg-gray-800 w-full h-36 rounded-lg'></div>
          <div className='text-black mt-4'>
            <h2 className='font-bold text-3xl'>$4,639809.99</h2>
            <p className='font-bold mt-2'>Total Balance</p>
          </div>
          <div className='users-tag flex mt-2'>
            <UserTag name="Top Up Balance" />
            <UserTag name="More" />
          </div>
        </div>
        <div className='box-2 mt-2'>
          <header className='font-bold text-black'>Recent Transactions</header>

          <div className='user-list'>
            <ul className='text-black mt-2'>
              <PriceList />
              <PriceList />
              <PriceList />
              <PriceList />
            </ul>
          </div>


        </div>

      </div>
    </div>
  );
}

export default SlideNavbar;
