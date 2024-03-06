import React from 'react';
import MenuDropdown from './MenuDropdown';
import { ChevronDownIcon } from '@/icons';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();
  return (
    <div className='col-span-4 flex items-center justify-center gap-6'>
      <div
        onClick={() => navigate('/')}
        className='relative mt-[-1.00px] w-fit cursor-pointer select-none whitespace-nowrap text-center font-medium transition-all hover:text-primary active:text-primary_mute'
      >
        Home
      </div>

      <div className='relative w-fit cursor-pointer select-none whitespace-nowrap  text-center font-medium transition-all hover:text-primary active:text-primary_mute'>
        Community
      </div>
      <MenuDropdown
        className='cursor-pointer'
        dropdownItems={[
          <div
            className='w-full'
            onClick={() => navigate('/store')}
            role='button'
          >
            Store
          </div>,
          <div
            className='w-full'
            onClick={() => navigate('/search')}
            role='button'
          >
            Search For Games
          </div>,
        ]}
      >
        <div className='relative inline-flex flex-[0_0_auto] items-center gap-[6px]'>
          <div className='relative w-fit select-none whitespace-nowrap text-center font-medium transition-all hover:text-primary active:text-primary_mute'>
            Games Store
          </div>

          <ChevronDownIcon className='h-4 w-4' />
        </div>
      </MenuDropdown>
    </div>
  );
}

export default Menu;
