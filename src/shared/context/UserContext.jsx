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

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    return redirect("/login"); // 페이지 리로드 없이 클라이언트 측 리다이렉션
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
