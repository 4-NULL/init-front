import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserData } from "../api/callUserData";

export function Sidebar() {
  const location = useLocation();
  const links = [
    { to: "/", label: "홈" },
    { to: "/curriculum", label: "커리큘럼" },
  ];

  const [user, setUser] = useState(null); // 초기값: 로그아웃 상태
  // 컴포넌트가 마운트될 때 로컬 스토리지에서 사용자 정보 가져오기
  useEffect(() => {
    const savedUser = localStorage.getItem("user"); // 로컬 스토리지에서 사용자 정보 확인
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // 로컬 스토리지에서 가져온 사용자 정보로 상태 설정
    }
  }, []);

  // 로그인 후 사용자 정보 로컬 스토리지에 저장
  const handleLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData)); // 사용자 정보 저장
    setUser(userData); // 로그인 상태로 설정
  };

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
      <div className="absolute bottom-0 w-60 p-4 border-t">
        {user ? (
          // 로그인 상태
          <div>
            <div className="flex items-center mb-4">
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-8 h-8 rounded-full bg-gray-200"
              />
              <div>
                <p className="ml-2 text-sm text-gray-600">{user.name}</p>
                <p className="ml-2 text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleLogout}
                className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-center"
              >
                로그아웃
              </button>
              <Link
                to="/profile"
                className="flex-1 py-2 px-4 bg-black text-white rounded hover:bg-gray-800 text-center"
              >
                내 정보
              </Link>
            </div>
          </div>
        ) : (
          // 로그아웃 상태
          <div>
            <div className="flex items-center mb-4">
              <img
                src="#"
                alt="User"
                className="w-8 h-8 rounded-full bg-gray-200"
              />
              <div>
                <p className="ml-2 text-sm text-gray-600">
                  로그인 후 이용 가능
                </p>
                <p className="ml-2 text-sm text-gray-600">123</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                to="/login"
                className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-center"
              >
                로그인
              </Link>
              <Link
                to="/join"
                className="flex-1 py-2 px-4 bg-black text-white rounded hover:bg-gray-800 text-center"
              >
                회원가입
              </Link>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
