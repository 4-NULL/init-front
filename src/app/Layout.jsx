
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@shared/ui';
import { useTokenRefresh } from '@shared/hooks/useTokenRefresh';
export function Layout() {
  const intervalTime = 10 * 60 * 1000;

  const [user, setUser] = useState(null);
  const { startTokenRefresh } = useTokenRefresh(setUser, intervalTime);

  useEffect(() => {
    if (user) {
      const stopRefresh = startTokenRefresh();
      return () => stopRefresh();
    }
  }, [startTokenRefresh]);

  return (
    <div className='flex w-full'>
      <Sidebar user={user} setUser={setUser} />
      <main className='flex-1'>
        <Outlet context={{user, setUser}} />
      </main>
    </div>
  );
}
