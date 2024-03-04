import React from 'react';
import MenuDropdown from './MenuDropdown';
import { ChevronDown } from '@/icons';

function Menu() {
  return (
    <div className='col-span-4 flex items-center justify-center gap-6'>
      <div className='relative mt-[-1.00px] w-fit whitespace-nowrap text-center  font-medium'>
        Home
      </div>

      <div className='relative w-fit whitespace-nowrap text-center  font-medium '>
        Community
      </div>
      <MenuDropdown dropdownItems={['test', '2']}>
        <div className='relative inline-flex flex-[0_0_auto] items-center gap-[6px]'>
          <div className='relative w-fit whitespace-nowrap text-center  font-medium'>
            Games Store
          </div>

          <ChevronDown className='h-4 w-4' />
        </div>
      </MenuDropdown>
    </div>
  );
}

export default Menu;
