import { ChatIcon, ShieldIcon } from '@/icons';
import SidebarTab from './SidebarTab';
import background from '@/assets/Img/SidebarImage.jpg';
import logo from '@/assets/Img/ritoLogo.png';

function Sidebar({
  bgSidebarTab1,
  bgSidebarTab2,
  bgSidebarTab3,
  bgSidebarTab4,
}) {
  return (
    <div
      className='flex min-h-[calc(100vh-48px)] flex-col gap-2 opacity-80'
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='flex items-center'>
        <img src={logo} className='h-28 w-28' />
        <h1 className='text-4xl font-bold text-white'>Admin Panel</h1>
      </div>
      <SidebarTab title='Non-verified games' to={`/admin`}>
        <ShieldIcon className='h-5 w-5' />
      </SidebarTab>
      <SidebarTab title='Message Center' to={`/admin/chat`}>
        <ChatIcon className='h-5 w-5' />
      </SidebarTab>
    </div>
  );
}

export default Sidebar;
