import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function MenuDropdown({ dropdownItems, children }) {
  return (
    <DropdownMenu className='select-none outline-none'>
      <DropdownMenuTrigger className='select-none outline-none'>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='select-none bg-base_light outline-none'>
        {dropdownItems?.map((item, index) => (
          <DropdownMenuItem key={index} className='focus:bg-accent'>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MenuDropdown;
