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
import { getUserGames } from '@/redux/slice/user-slice';
import AdminButton from '@/features/admin/components/AdminButton';
import { deleteGame, verifyGame } from '@/redux/slice/admin-slice';

function GamePageHeroDetail({ gameData }) {
  console.log(gameData.id, 'game id in hero detail');
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);
  const { userGames } = useSelector((state) => state.users);
  const { carts } = useSelector((state) => state.carts);
  const { wishlist } = useSelector((state) => state.wishlists);
  const navigate = useNavigate();
  const { gamePlatforms, releasedDate, gameGenres, metacritic } = gameData;
  const [inWishList, setInWishList] = useState(false);
  const [owned, setOwned] = useState(false);


  console.log(gameGenres.length, 'game genres in hero detail');

  useEffect(() => {
    if (authUser) {
      const userId = authUser.id;
      dispatch(getUserGames(userId));
    }
  }, [authUser]);

  useEffect(() => {
    if (userGames) {
      const index = userGames.findIndex((item) => item.id == gameData.id);
      console.log(index, 'index in hero detail');
      if (index === -1) {
        setOwned(false);
      } else {
        setOwned(true);
      }
    }
  }, [userGames]);

  const isInCart = () => {
    const index = carts.findIndex((item) => item.gameId === gameData.id);
    return index === -1 ? false : true;
  };

  useEffect(() => {
    const index = wishlist.findIndex((item) => item.game.id === gameData.id);
    if (index === -1) {
      setInWishList(false);
    } else {
      setInWishList(true);
    }
  }, [wishlist]);

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

  return (
    <>
      <div className='flex h-[500px] w-2/5 flex-col justify-between gap-2 bg-base_light text-center'>
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
                {gameGenres.length == 1
                  ? gameGenres[0].genre.name
                  : gameGenres.map((genre) => `${genre.genre.name}, `)}
              </p>
            </div>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-black'>Metacritic </span>
              <p className='text-sm text-black'>{metacritic}</p>
            </div>
          </div>
        </div>

        {/* Admin & Game not verified */}
        {authUser.isAdmin && !gameData.isVerified ? (
          <div className='flex h-12 justify-between'>
            <AdminButton
              mode='confirm'
              width='w-1/2'
              onClick={() =>
                dispatch(verifyGame({ gameId: gameData.id, navigate }))
              }
            >
              Verify
            </AdminButton>
            <AdminButton
              mode='delete'
              width='w-1/2'
              onClick={() =>
                dispatch(deleteGame({ gameId: gameData.id, navigate }))
              }
            >
              Delete
            </AdminButton>
          </div>
        ) : authUser.isAdmin && !gameData.deletedAt ? (
          // Admin, Game verified, not deleted
          <div className='flex h-12'>
            <AdminButton
              mode='delete'
              width='w-full'
              onClick={() =>
                dispatch(deleteGame({ gameId: gameData.id, navigate }))
              }
            >
              Delete
            </AdminButton>
          </div>
        ) : // Admin, is a deleted game
        authUser.isAdmin ? null : owned ? (
          // User, game owned
          <div className='flex h-16 w-full items-center justify-center bg-base_dark font-bold text-white'>
            YOU ALREADY OWN THIS GAME
          </div>
        ) : (
          <div className='flex w-full justify-between'>
            {/* User, game not owned, game in cart */}
            {isInCart() ? (
              <GamePageButton
                bg='bg-secondary'
                width='w-full'
                activeColor='active:bg-secondary_mute'
                onClick={() => navigate('/cart')}
              >
                IN CART
              </GamePageButton>
            ) : (
              // User, game not owned, game not in cart, check if in wishlist
              <>
                {inWishList
                  ? authUser && (
                      <div
                        onClick={() => {
                          dispatch(addGameToWishlist(gameData.id));
                          setInWishList(false);
                        }}
                        className='flex w-1/4 items-center justify-center bg-base_dark'
                      >
                        <HeartIcon className='fill-primary stroke-primary' />
                      </div>
                    )
                  : authUser && (
                      <div
                        onClick={() => {
                          dispatch(addGameToWishlist(gameData.id));
                          setInWishList(true);
                        }}
                        className='flex w-1/4 items-center justify-center bg-base_dark'
                      >
                        <HeartIcon className='fill-base-300 stroke-base-300' />
                      </div>
                    )}
                <GamePageButton
                  bg='bg-secondary'
                  width='w-full'
                  activeColor='active:bg-secondary_mute'
                  onClick={() => dispatch(addItem({ gameId: gameData.id }))}
                >
                  ADD TO CART
                </GamePageButton>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default GamePageHeroDetail;
