export default function SearchBar() {
  return (
    <div className='z-50 flex h-14 flex-grow gap-4 backdrop-blur-lg'>
      <div className='flex w-full'>
        <input
          type='text'
          className='flex-1 border border-base_dark px-12 py-4'
          placeholder='search your games here...'
        />
        <button className='flex-shrink-0 bg-base_dark px-12 py-4  text-neutral transition-all hover:bg-primary  active:bg-primary_mute'>
          Search
        </button>
      </div>
    </div>
  );
}
