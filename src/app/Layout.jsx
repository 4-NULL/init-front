import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@shared/ui";
import { UserProvider, useUser } from "@shared/context";

import { useTokenRefresh } from "@shared/hooks/useTokenRefresh";
function LayoutContent() {
  const intervalTime = 10 * 60 * 1000;
  const { user, setUser } = useUser();
  const { startTokenRefresh } = useTokenRefresh(intervalTime);

  useEffect(() => {
    if (user) {
      const stopRefresh = startTokenRefresh();
      return () => stopRefresh();
    }
  }, [user, startTokenRefresh]);

  return (
    <div className="flex w-full">
      <Sidebar />
      <main className="flex-1">
        <Outlet context={{ user, setUser }} />
      </main>
    </div>
  );
}

export const Layout = () => (
  <UserProvider>
    <LayoutContent />
  </UserProvider>
);
