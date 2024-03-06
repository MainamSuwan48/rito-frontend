import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

function GameStoreSorter() {
  const [isAscending, setIsAscending] = useState(true);
  const handleClick = () => {
    setIsAscending(!isAscending);
  };
  return (
    <div className='flex items-center justify-center'>
      <Select className=''>
        <SelectTrigger className='h-14 w-[140px] rounded-none'>
          <SelectValue placeholder='Sort By' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='light'>Name</SelectItem>
          <SelectItem value='dark'>Release Date</SelectItem>
          <SelectItem value='system'>Price</SelectItem>
        </SelectContent>
      </Select>
      <div
        onClick={handleClick}
        className={`hover:text-white transition-all flex select-none h-full items-center justify-center w-[120px] ${isAscending ? 'bg-primary active:bg-primary_mute' : 'bg-secondary active:bg-secondary_mute'}`}
      >
        {isAscending ? 'Ascending' : 'Descending'}
      </div>
    </div>
  );
}

export default GameStoreSorter;
