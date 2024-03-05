export default function SearchBar() {
  return (
    <div className=' flex gap-4 h-[3rem]'>
      <div className='flex h-auto w-full'>
        <input
          type='text'
          className='flex-1 border border-base_dark px-12 py-4'
          placeholder='search your games here...'
        />
        <button className='flex-shrink-0 bg-base_dark px-12 py-4  text-neutral'>
          Search
        </button>
      </div>
      <div className='flex w-[271px] flex-shrink-0 items-center justify-center gap-4'>
        <p>Sort By</p>
        <button className=' bg-neutral px-12 py-4 text-black text-opacity-45'>
          Relevance
        </button>
      </div>
    </div>
  );
}
