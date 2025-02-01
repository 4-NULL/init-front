import { SidebarBottom } from "@shared/ui";
import { Link, useLocation } from "react-router-dom";
export function Sidebar() {
  const location = useLocation();
  const links = [
    { to: "/", label: "홈" },
    { to: "/curriculum", label: "커리큘럼" },
    { to: "/group", label: "그룹" },
  ];

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
      <SidebarBottom />
    </aside>
  );
}
