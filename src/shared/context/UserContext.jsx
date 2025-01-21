// src/shared/context/UserContext.jsx
import { createContext, useState, useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { GET } from "@shared/api";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData)); // 사용자 정보 저장
    setUser(userData);
    return navigate("/");
  };

  const logout = async () => {

    try {
      await GET('/auth/logout'); // 서버에 모든 쿠키 삭제

      setUser(null);
      localStorage.removeItem("user");
      return redirect("/login"); // 페이지 리로드 없이 클라이언트 측 리다이렉션

    } catch (error) {
      alert("로그아웃 처리중 오류가 발생하였습니다: " + error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
