import { Outlet } from 'react-router-dom';
import { Sidebar } from '@shared/ui';
export function Layout ()  {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  );
};
