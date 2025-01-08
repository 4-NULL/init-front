import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SidebarBottom } from "@shared/ui";

export function Sidebar({user, setUser}) {
  const location = useLocation();
  const links = [
    { to: "/", label: "홈" },
    { to: "/curriculum", label: "커리큘럼" },
  ];


  // 컴포넌트가 마운트될 때 로컬 스토리지에서 사용자 정보 가져오기
  useEffect(() => {
    const savedUser = localStorage.getItem("user"); // 로컬 스토리지에서 사용자 정보 확인
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // 로컬 스토리지에서 가져온 사용자 정보로 상태 설정
    }
  }, []);

  // 로그아웃 시 로컬 스토리지에서 삭제하고 상태 초기화
  const handleLogout = () => {
    localStorage.removeItem("user"); // 로컬 스토리지에서 사용자 정보 삭제
    setUser(null); // 로그아웃 상태로 설정
  };

  return (
    <aside className="w-60 h-screen bg-white border-r">
      {/* 로고 섹션 */}
      <div className="p-4 border-b">
        <div className="flex items-center">
          <img src="#" alt="logo" className="w-8 h-8" />
          <span className="ml-2">4-null</span>
        </div>
      </div>

      {/* 내비게이션 */}
      <nav className="mt-4">
        {links.map(({ to, label }) => {
          const isActive = location.pathname === to;
          const className = isActive
            ? "flex items-center px-4 py-2 mx-3 bg-black text-white rounded-lg"
            : "flex items-center px-4 py-2 mx-3 text-gray-700 hover:bg-gray-100 rounded-lg";

          return (
            <Link key={to} to={to} className={`mb-2 ${className}`}>
              <img src="#" alt="" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* 하단 사용자 섹션 */}
      <SidebarBottom user={ user } handleLogout={ handleLogout } />
    </aside>
  );
}
