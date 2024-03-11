import { ShieldIcon } from '@/icons';
import SidebarTab from './SidebarTab';

function Sidebar({
  bgSidebarTab1,
  bgSidebarTab2,
  bgSidebarTab3,
  bgSidebarTab4,
}) {
  return (
    <div className='flex flex-col gap-2 bg-gray-200 p-8'>
      <SidebarTab bg={bgSidebarTab1} title='Non-verified games' to={`/admin`}>
        <ShieldIcon className='h-5 w-5' />
      </SidebarTab>
    </div>
  );
}

export default Sidebar;
