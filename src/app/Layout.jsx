import { Outlet } from 'react-router-dom';
import { Header } from '@shared/ui';
export function Layout ()  {
  return (
    <div className='w-full'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

