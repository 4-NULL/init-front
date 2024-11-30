import { redirect } from 'react-router-dom';

export const logout = () => {
    localStorage.clear();  // 모든 항목을 삭제
    alert('로그아웃 되었습니다.')
    return redirect('/login');  // 페이지 리로드 없이 클라이언트 측 리다이렉션
}