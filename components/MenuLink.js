import React from 'react';

function MenuLink(props) {
  return (
    <div>
      <li className='p-2 my-1 rounded-lg text-black hover:bg-green-400 cursor-pointer' >
          <i className={props.name}></i> 
      </li>
    </div>
  );
}

export default MenuLink;


