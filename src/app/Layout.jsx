
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@shared/ui';
export function Layout ()  {

  const [user, setUser] = useState(null)
  return (
    <div className='flex w-full'>
      <Sidebar user={user} setUser={setUser} />
      <main className='flex-1'>
        <Outlet context={{user, setUser}} />
      </main>
    </div>
  );
};
