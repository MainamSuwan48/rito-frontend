import { Link } from 'react-router-dom';

const defaultClasses = 'flex gap-4 p-4 items-center font-medium rounded-md';

function SidebarTab({
  to,
  bg = 'bg-transparent',
  title,
  hoverColor = 'hover:bg-primary_mute',
  children,
}) {
  const extendedClasses = `${bg} ${hoverColor}`;

  return (
    <div>
      <Link
        className={`${defaultClasses} ${extendedClasses} text-white active:scale-95`}
        to={to}
      >
        {children}
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default SidebarTab;
