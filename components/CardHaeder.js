import React from 'react';

const CardHaeder = () => {
    return (
        <div className='card p-3 bg-white w-1/3 rounded-lg'>
            <div className='text-box'>
                <div className='flex justify-between'>
                    <div className='card-title flex flex-col'>
                        <div className='w-14 h-14 rounded-full bg-blue-600'></div>
                        <div className='text-black mt-2'>
                            Revenue
                            <h2 className='font-bold text-3xl'>$4,609</h2>
                        </div>
                    </div>
                    <div className='text-black'>
                        7 days <i className='bx bx-chevron-down'></i>
                    </div>
                </div>
            </div>
            <div className='graph image text-black'>
                chart image
            </div>
        </div>
    );
}

export default CardHaeder;
