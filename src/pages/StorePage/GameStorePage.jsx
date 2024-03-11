import GameCardStrip from '@/features/store/components/GameCardStrip';
import SearchBar from '@/features/store/components/SearchBar';
import SideBar from '@/features/store/components/SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '@/redux/slice/games-slice';
import { useEffect, useState } from 'react'; // Remove lazy and Suspense imports
import GameStoreSorter from '@/features/store/components/GameStoreSorter';
import { Skeleton } from '@/components/ui/skeleton';
import GameCard from '@/features/store/components/GameCard'; // Import GameCard directly

export default function GameStorePage() {
  const dispatch = useDispatch();
  const { games, loadingCurrentGame } = useSelector(
    (state) => state.games.games
  );
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (!games) {
      dispatch(getGames())
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [games]);

  return loadingCurrentGame ? null : (
    <div className='relative flex w-full overflow-auto'>
      <video
        className='-z-50'
        autoPlay
        loop
        muted
        style={{
          opacity: '0.8',
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src='https://rr3---sn-o097znzk.googlevideo.com/videoplayback?expire=1710176553&ei=yeTuZYPSKtSP6dsP4JexoAw&ip=84.239.42.56&id=o-ACO9GF4m-rl3hk3N2sgindUjKM5iKUD7BSjRas3--ltQ&itag=137&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&spc=UWF9fwg2lZCH2m2zodV2PWAacFrXwDRkoXsj8a6YG9079T0&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=23194845&dur=58.057&lmt=1682925501774611&keepalive=yes&fexp=24007246&c=ANDROID&txp=5432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgEKx84dzWQ9k88vfFlsGT-6naNk-XWdb0hwhWydwMhiICIQCu-vESPEorAazDtryHAaCChjPcLpy_Mqp-0cEusLCTMQ%3D%3D&redirect_counter=1&rm=sn-4g5eys7z&req_id=d77390e84b1fa3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=uG&mip=101.109.240.124&mm=31&mn=sn-o097znzk&ms=au&mt=1710154034&mv=D&mvi=3&pl=0&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=APTiJQcwRQIhAOgCYjE91LvswFgCwQ7ERuNO_uyqkd8aw0misDrLqwcpAiALZKpYFu--ajW8EJkAQ7e_YclrCw3FdjXep9UMS2XBUg%3D%3D' />
      </video>
      <SideBar />
      <div className='relative flex w-store_search_bar flex-col gap-4'>
        <div className='flex'>
          <SearchBar />
          <GameStoreSorter />
        </div>
        {loading ? ( // Render loading state
          <div className='grid h-game_store grid-cols-1 items-start gap-6 self-center justify-self-center overflow-auto pb-6 lg:grid-cols-2 2xl:grid-cols-3'>
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
          </div>
        ) : (
          <div className='grid h-game_store grid-cols-1 items-start gap-6 self-center justify-self-center overflow-auto pb-6 lg:grid-cols-2 2xl:grid-cols-3'>
            {games &&
              games.map((game) => <GameCard key={game.id} gameData={game} />)}
          </div>
        )}
      </div>
    </div>
  );
}
