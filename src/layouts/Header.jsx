import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import Menu from './Menu';
import { CartIcon } from '@/icons';
import Logo from '@/assets/Img/ritoLogo.png';
import MenuDropdown from './MenuDropdown';
import { useSelector } from 'react-redux';

function Header() {
  const { authUser, loading } = useSelector((state) => state.auth);

  return (
    <div className='grid max-w-[1440px] grid-cols-12 px-[128px] py-[12px]'>
      <div className='col-span-4 flex items-center gap-[12px] justify-self-start'>
        <img className='relative h-12 w-12' alt='Logorito text' src={Logo} />
      </div>

      <Menu />

      {authUser ? (
        <div className='col-span-4 flex items-center gap-6 justify-self-end'>
          <div>Cart</div>
          <div className='relative'>
            <CartIcon />
            <div className='absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-[100px] bg-accent'>
              <div className='text-center text-xs'>1</div>
            </div>
          </div>

          <MenuDropdown
            dropdownItems={[
              'Profile',
              'Friends',
              'Game List',
              'Settings',
              'Log out',
            ]}
          >
            <Avatar className='h-8 w-8'>
              <AvatarImage src={authUser?.profileImageUrl} />
              <AvatarFallback className='bg-primary'>
                {authUser?.username[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </MenuDropdown>
        </div>
      ) : (
        <div className='col-span-4 justify-self-end'>
          <button className='shadow-neutral-shadow-02 border border-solid border-accent px-[18px] py-[14px]'>
            <div className="relative mt-[-1.00px] w-[86px] text-center text-[14px] font-semibold leading-[20px] tracking-[0] text-accent [font-family:'Poppins-SemiBold',Helvetica]">
              Sign in
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
