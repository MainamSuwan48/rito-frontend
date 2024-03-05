export default function SideBar() {
  return (
    <>
      <div className='flex flex-col bg-neutral text-neutral'>
        <div className='justify-start bg-base_dark p-4'>Platform</div>
        <div className='flex flex-col gap-4 p-4 text-base_dark'>
          <p>item1</p>
          <p>item2</p>
          <p>item3</p>
          <p>item4</p>
          <p>item5</p>
        </div>
      </div>
    </>
  );
}
