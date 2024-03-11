import PublishGameRequestingCard from '@/features/admin/components/PublishGameRequestingCard';
import Sidebar from '@/features/admin/components/Sidebar';
import {
  clearUnverifiedGames,
  getUnverifiedGames,
} from '@/redux/slice/admin-slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function AdminControlPanelPage() {
  const dispatch = useDispatch();
  const { unVerifiedGames, loading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getUnverifiedGames());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='grid grid-cols-12 gap-16'>
      <div className='col-span-3'>
        <Sidebar bgSidebarTab1='bg-primary' />
      </div>
      <div className='col-span-9'>
        <div className='flex flex-col gap-4 py-16'>
          {unVerifiedGames.map((game) => (
            <PublishGameRequestingCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
