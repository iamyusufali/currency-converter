import React from 'react';
import { MdSort, MdBrightness6 } from 'react-icons/md'

import { NavContainer, Title } from './Style';

const Navbar = () => {
  return (
    <NavContainer>
      <div>
        <MdSort size='2.5rem' color='#353b48' className='icon'/>
      </div>
      <div>
        <Title>Currency Converter</Title>
      </div>
      <div>
        <MdBrightness6 size='2rem' color='#353b48' className='icon'/>
      </div> 
    </NavContainer>
  );
}

export { Navbar };