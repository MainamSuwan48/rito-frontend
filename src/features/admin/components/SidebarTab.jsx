import { Link } from 'react-router-dom';

const defaultClasses =
  'flex gap-4 py-6 px-8 items-center font-medium bg-opacity-30 text-white';

function SidebarTab({
  to,
  bg = 'bg-transparent',
  title,
  hoverColor = 'hover:bg-secondary',
  children,
}) {
  const extendedClasses = `${bg} ${hoverColor}`;

  return (
    <div>
      <Link className={`${defaultClasses} ${extendedClasses}`} to={to}>
        {children}
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default SidebarTab;
