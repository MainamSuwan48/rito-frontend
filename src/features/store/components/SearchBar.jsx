export default function SearchBar() {
  return (
    <div className='flex gap-4 h-14 z-50 backdrop-blur-lg flex-grow'>
      <div className='flex w-full'>
        <input
          type='text'
          className='flex-1 border border-base_dark px-12 py-4'
          placeholder='search your games here...'
        />
        <button className='flex-shrink-0 bg-base_dark px-12 py-4  text-neutral'>
          Search
        </button>
      </div> 
    </div>
  );
}
