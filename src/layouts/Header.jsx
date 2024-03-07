import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Local Import
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Menu from './Menu';
import { CartIcon } from '@/icons';
import Logo from '@/assets/Img/ritoLogo.png';
import MenuDropdown from './MenuDropdown';
import LoginModal from '@/features/auth/components/LoginModal';
import { getMe, logout } from '@/redux/slice/auth-slice';
import { getMyCart } from '@/redux/slice/cart-slice';
import { useNavigate } from 'react-router-dom';
import WishList from '@/features/user/components/WishList';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { authUser, loading } = useSelector((state) => state.auth);
  const { carts, loading: cartLoading } = useSelector((state) => state.carts);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!authUser) {
      dispatch(getMe());
    }
    if (authUser) {
      dispatch(getMyCart());
    }
  }, [authUser]);

  return (
    <div className='fixed z-50 grid h-12 w-[100vw] grid-cols-12 px-6 backdrop-blur-lg'>

      <div
        onClick={() => navigate('/')}
        className='col-span-4 ml-4 flex items-center gap-[12px] justify-self-start transition-all hover:scale-125 active:scale-100'
      >
        <img className='relative h-12 w-12' alt='Logo rito text ' src={Logo} />
      </div>

      <Menu />

      {authUser ? (
        <div className='col-span-4 flex items-center gap-6 justify-self-end'>
          <div>Cart</div>
          <div
            className='relative'
            role='button'
            onClick={() => navigate('/cart')}
          >
            <CartIcon />
            {carts?.length > 0 && (
              <div className='absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-[100px] bg-accent'>
                <div className='text-center text-xs'>{carts.length}</div>
              </div>
            )}
          </div>
          <WishList />


          <MenuDropdown
            dropdownItems={[
              <div
                className='w-full'
                onClick={() => navigate('/user')}
                role='button'
              >
                Profile
              </div>,

              <div
                className='w-full'
                onClick={() => dispatch(logout())}
                role='button'
              >
                Log Out
              </div>,
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
        <div className='col-span-4 h-12 justify-self-end'>
          <button
            onClick={openModal}
            className='shadow-neutral-shadow-02 h-12 border border-solid border-accent px-[24px] text-accent transition-all hover:bg-primary hover:text-neutral active:bg-primary_mute'
          >
            Sign in
          </button>
          {open && <LoginModal onClose={closeModal} />}
        </div>
      )}
    </div>
  );
}

export default Header;
