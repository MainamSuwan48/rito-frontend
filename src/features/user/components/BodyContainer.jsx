import { useEffect } from 'react';
import FriendItems from './FriendItems';
import GameItems from './GameItems';
import { useSelector, useDispatch } from 'react-redux';
import { getUserGames } from '@/redux/slice/user-slice';
import GameCardStrip from '@/features/store/components/GameCardStrip';
import FriendList from './FriendList';

export default function BodyContainer({ user }) {
  const dispatch = useDispatch();
  const { userGames, loadingUserGames } = useSelector((state) => state.users);
  const userId = user.id;

  const test = () => {
    console.log(userGames[0]);
  };

  useEffect(() => {
    dispatch(getUserGames(userId));
  }, [user]);

  return (
    <div className='grid grid-cols-[7fr_3fr] gap-2.5 '>
      <div className='flex h-fit flex-col gap-2 '>
        <div className='inline-flex h-16 w-full items-center justify-start gap-2.5 bg-slate-500 bg-opacity-80 px-6 py-4'>
          <div className='flex h-4 shrink grow basis-0 items-center justify-between'>
            <div
              onClick={test}
              className='text-center  text-base font-semibold leading-snug text-white'
            >
              GamesCollection
            </div>
          </div>
        </div>
        <div className='mb-2 flex flex-col gap-2 '>
          {userGames && userGames.length === 0 ? (
            <div className='flex h-16 w-full items-center justify-center gap-2.5 bg-base_light bg-opacity-80 px-6 py-4'>
              this user doesn't have any game in the collection
            </div>
          ) : (
            userGames &&
            userGames.map((game, index) => (
              <GameCardStrip type='profile' key={index} gameData={game} />
            ))
          )}
        </div>
      </div>

      <FriendList user={user} />
    </div>
  );
}
