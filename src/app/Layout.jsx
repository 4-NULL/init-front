
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@shared/ui';
import { useTokenRefresh } from '@shared/hooks/useTokenRefresh';
export function Layout ()  {

  const [user, setUser] = useState(null);
  // const { loading } = useTokenRefresh();

  return (
    <>
      {/*
      {
        loading && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 shadow-lg text-center">
              <p className="text-lg font-bold bg-orange-100">Loading...</p>
          </div>
        )
      }
       */}
      <div className='flex w-full'>
        <Sidebar user={user} setUser={setUser} />
        <main className='flex-1'>
          <Outlet context={{user, setUser}} />
        </main>
      </div>
    </>
  );
}
