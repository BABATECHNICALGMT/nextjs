import React from 'react';

const UserTag = (props) => {
    return (
        <div className='flex flex-row items-center my-3 ml-1'>
                <div className='w-9 h-9 rounded-full bg-blue-600'></div>
                <p className='m-2'>{props.name} </p>
        </div>
       
    );
}

export default UserTag;
