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
    if (!userGames) {
      dispatch(getUserGames(userId));
    }
  }, [userGames]);

  return (
    <div className='grid grid-cols-[7fr_3fr] gap-2.5'>
      <div className='flex flex-col gap-2'>
        <div className='inline-flex h-12 w-full items-center justify-start gap-2.5 bg-slate-500 px-6 py-4'>
          <div className='flex h-4 shrink grow basis-0 items-center justify-between'>
            <div
              onClick={test}
              className='text-center  text-base font-semibold leading-snug text-white'
            >
              GamesCollection
            </div>
          </div>
        </div>
        {userGames &&
          userGames.map((game, index) => (
            <GameCardStrip type='profile' key={index} gameData={game} />
          ))}
      </div>

      <FriendList user={user}/>
    </div>
  );
}
