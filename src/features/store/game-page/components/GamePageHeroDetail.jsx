import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import GamePageButton from './GamePageButton';
import { HeartIcon } from '@/icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addItem } from '@/redux/slice/cart-slice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { addGameToWishlist } from '@/redux/slice/wishlists-slice';

function GamePageHeroDetail({ gameData }) {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);
  const { wishlist } = useSelector((state) => state.wishlists);
  const navigate = useNavigate();
  const { gamePlatforms, releasedDate, gameGenres, metacritic } = gameData;

  const [inWishList, setInWishList] = useState(false);

  console.log(carts);

  const isInCart = () => {
    const index = carts.findIndex((item) => item.gameId === gameData.id);
    return index === -1 ? false : true;
  };

  const isInWishList = () => {
    const index = wishlist.findIndex((item) => item.game.id === gameData.id);
    return index === -1 ? false : true;
  };

  {
    /* =============== < This will convert date to a readable string > =============== */
  }
  function convertToDate(obj) {
    let date = new Date(obj);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  let date = convertToDate(releasedDate);

  // useEffect(() => {
  //   if (wishlist.length > 0 && !inWishList) {
  //     setInWishList(isInWishList());
  //   }
  //   if (wishlist.length === 0) {
  //     setInWishList(false);
  //   }
  // }, [wishlist]);

  return (
    <>
      <div className='flex h-[400px] w-2/5 flex-col justify-between gap-2 bg-base_light text-center'>
        <div className='flex flex-col gap-2 overflow-auto'>
          <div className='w-full bg-base-100 p-4'>
            <p className='text-left font-semibold'>Details</p>
          </div>

          <div className='flex flex-col gap-4 px-4 py-2'>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-black'>Released Date </span>
              <p className='text-sm text-black'>{date}</p>
            </div>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-black'>Platforms </span>
              <p className='text-sm text-black'>
                {gamePlatforms.map((platform) => `${platform.platform.name}, `)}
              </p>
            </div>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-black'>Genres </span>
              <p className='text-sm text-black'>
                {gameGenres.length === 1
                  ? gameGenres[0].name
                  : gameGenres.map((genre) => `${genre.genre.name}, `)}
              </p>
            </div>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-black'>Metacritic </span>
              <p className='text-sm text-black'>{metacritic}</p>
            </div>
          </div>
        </div>
        <div className='flex w-full justify-between'>
          {inWishList ? (
            <div
              onClick={() => {
                dispatch(addGameToWishlist(gameData.id));
                setInWishList(false);
              }}
             className='flex w-1/4 items-center justify-center bg-primary transition-all hover:bg-base_dark active:bg-base-300'>
              <HeartIcon className='fill-base-300 stroke-base-300' />
            </div>
          ) : (
            <div
              onClick={() => {
                dispatch(addGameToWishlist(gameData.id));
                setInWishList(true);
              }}
              className='flex w-1/4 items-center justify-center bg-base_dark transition-all hover:bg-primary active:bg-primary_mute'
            >
              <HeartIcon className='fill-base-300 stroke-base-300' />
            </div>
          )}

          {isInCart() ? (
            <GamePageButton
              bg='bg-secondary'
              width='w-3/4'
              activeColor='active:bg-secondary_mute'
              onClick={() => navigate('/cart')}
            >
              IN CART
            </GamePageButton>
          ) : (
            <GamePageButton
              bg='bg-secondary'
              width='w-3/4'
              activeColor='active:bg-secondary_mute'
              onClick={() => dispatch(addItem({ gameId: gameData.id }))}
            >
              ADD TO CART
            </GamePageButton>
          )}
        </div>
      </div>
    </>
  );
}

export default GamePageHeroDetail;
