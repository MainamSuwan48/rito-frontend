import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useDispatch, useSelector } from 'react-redux';
import {
  sortGames,
  reverseGames,
  sortSearchedGames,
  reverseSearchedGames,
} from '../../../redux/slice/games-slice';

function GameStoreSorter({ type = '' }) {
  const { isAscending, searchedGamesAscending } = useSelector(
    (state) => state.games
  );
  const dispatch = useDispatch();
  const sort = (query) => dispatch(sortGames(query));
  const sortSearched = (query) => dispatch(sortSearchedGames(query));

  const toggleSort = () => {
    if (type === 'search') {
      return dispatch(reverseSearchedGames());
    }
    dispatch(reverseGames());
  };

  if (type == 'search') {
    return (
      <div className='box-border flex items-center justify-cente'>
        <Select onValueChange={(value) => sortSearched(value)} className=''>
          <SelectTrigger className='h-14 w-[160px] rounded-none'>
            <SelectValue placeholder='Sort By' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='id'>Default</SelectItem>
            <SelectItem value='name'>Name</SelectItem>
            <SelectItem value='releasedDate'>Release Date</SelectItem>
            <SelectItem value='price'>Price</SelectItem>
          </SelectContent>
        </Select>
        <div
          onClick={toggleSort}
          className={`flex h-full w-[120px] select-none items-center justify-center transition-all hover:text-white ${searchedGamesAscending ? 'bg-primary active:bg-primary_mute' : 'bg-secondary active:bg-secondary_mute'}`}
        >
          {searchedGamesAscending ? 'Ascending' : 'Descending'}
        </div>
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center'>
      <Select onValueChange={(value) => sort(value)} className=''>
        <SelectTrigger className='h-14 w-[160px] rounded-none'>
          <SelectValue placeholder='Sort By' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='id'>Default</SelectItem>
          <SelectItem value='name'>Name</SelectItem>
          <SelectItem value='releasedDate'>Release Date</SelectItem>
          <SelectItem value='price'>Price</SelectItem>
        </SelectContent>
      </Select>
      <div
        onClick={toggleSort}
        className={`flex h-full w-[120px] select-none items-center justify-center transition-all hover:text-white ${isAscending ? 'bg-primary active:bg-primary_mute' : 'bg-secondary active:bg-secondary_mute'}`}
      >
        {isAscending ? 'Ascending' : 'Descending'}
      </div>
    </div>
  );
}

export default GameStoreSorter;
