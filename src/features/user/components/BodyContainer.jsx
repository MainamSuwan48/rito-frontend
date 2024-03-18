import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserGames } from '@/redux/slice/user-slice';
import GameCardStrip from '@/features/store/components/GameCardStrip';
import FriendList from './FriendList';
import { useParams } from 'react-router-dom';

export default function BodyContainer({ user }) {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);
  const { userGames, loadingUserGames } = useSelector((state) => state.users);
  const userId = useParams().userId;

  const test = () => {
    console.log(userGames[0]);
  };

  useEffect(() => {
    if (userId) {
      dispatch(getUserGames(userId));
    } else if (authUser) {
      dispatch(getUserGames(authUser.id));
    }
  }, [user, authUser]);

  return (
    <div className='grid grid-cols-[7fr_3fr] gap-2.5'>
      <div className='flex max-h-full min-h-fit flex-col gap-2'>
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
        <div className='mb-2 flex flex-col gap-2 overflow-auto'>
          {userGames && userGames.length === 0 ? (
            <div className='flex h-16 w-full items-center justify-center gap-2.5 bg-base_light bg-opacity-80 px-6 py-4'>
              this user doesn't have any game in the collection
            </div>
          ) : (
            userGames &&
            userGames.map((game, index) => (
              <GameCardStrip
                type={userId ? 'friend' : 'profile'}
                key={index}
                gameData={game}
              />
            ))
          )}
        </div>
      </div>

      <FriendList user={user} />
    </div>
  );
}
