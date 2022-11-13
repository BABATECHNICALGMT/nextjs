import React from 'react';

function PriceList() {
  return (
    <li className='flex justify-between items-center p-3 bg-gray-300 rounded-2xl mt-2 '>
                  <div className='flex'>
                      <div className='w-11 h-11 rounded-full bg-blue-600'></div>
                      <div className='px-1'>
                      <h3>Netfix</h3>
                      <div>20 March 2022</div>
                      </div>
                  </div>
                  <p className='font-bold'>+8,90.90</p>
              </li>
  );
}

export default PriceList;
