export default function GameItems() {
  return (
    <div className='flex bg-white'>
      <img
        onClick={() => navigate(`/game/${id}`)}
        className='h-[6rem] w-[25rem] cursor-pointer object-cover transition-all hover:scale-105 active:scale-100'
        src={backgroundImageUrl}
      />
      <div className='flex w-full justify-between'>
        <div className='flex flex-col justify-between p-4'>
          <div>
            <h2 className='font-bold text-black'>{name}</h2>
            <div className='mt-2 flex gap-2'>
              {gameTags.slice(0, 3).map((tag, index) => (
                <GameCardTag key={tag.tag.id} name={tag.tag.name}>
                  {tag.tag.name}
                </GameCardTag>
              ))}
            </div>
          </div>
        </div>    
      </div>
    </div>
  );
}
