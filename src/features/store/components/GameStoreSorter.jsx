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

  const handleChange = (e) => {
    console.log(e.target);
  };

  const toggleSort = () => {
    setIsAscending(!isAscending);
  };
  return (
    <div className='flex items-center justify-center'>
      <Select 
      onValueChange={(value) => console.log(value)}
      className=''>
        <SelectTrigger className='h-14 w-[160px] rounded-none'>
          <SelectValue placeholder='Sort By' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='name'>Name</SelectItem>
          <SelectItem value='released_date'>Release Date</SelectItem>
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
