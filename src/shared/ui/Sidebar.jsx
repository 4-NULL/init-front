import { Link } from "react-router-dom";
import { Button } from "./Button";

export function Sidebar() {
  return (
    <aside className="w-60 h-screen bg-white border-r">
      {/* 로고 섹션 */}
      <div className="p-4">
        <div className="flex items-center">
          <img src="#" alt="logo" className="w-8 h-8" />
          <span className="ml-2">4-null</span>
        </div>
      </div>

      {/* 내비게이션 */}
      <nav className="mt-4">
        <Link to="/" className="flex items-center px-4 py-2 bg-black text-white">
          <span>홈</span>
        </Link>
        <Link to="/curriculum" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <span>커리큘럼</span>
        </Link>
      </nav>

      {/* 하단 사용자 섹션 */}
      <div className="absolute bottom-0 w-60 p-4 border-t">
        <div className="flex items-center mb-4">
          <img src="#" alt="User" className="w-8 h-8 rounded-full bg-gray-200" />
          <span className="ml-2 text-sm text-gray-600">로그인 후 이용 가능</span>
        </div>
        <div className="flex gap-2">
          <Button label="로그인" className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"/>
          <Button label="회원가입" className="flex-1 py-2 px-4 bg-black text-white rounded hover:bg-gray-800"/>
        </div>
      </div>
    </aside>
  );
}
