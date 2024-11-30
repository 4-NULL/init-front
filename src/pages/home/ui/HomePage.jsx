import { useNavigate } from 'react-router-dom';
import { logoutRequest } from '@pages/login';

export function HomePage() {
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  // 버튼 클릭 시 커리큘럼 상세 페이지로 이동
  const goToCurriculumDetail = () => {
    navigate('/curriculum');
  };
  const handleLoginClick = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };
  
  const handleJoinClick = () => {
    navigate('/join'); // 회원가입 페이지로 이동
  };

  const handleLogoutClick = () => {
    logoutRequest(); // 로그아웃 Action
  };

  return (
    <div>
      <h1>init HomePage</h1>
      <p>We are a service 4 Null!</p>

      <button onClick={goToCurriculumDetail}>커리큘럼 상세 보기</button>
      <button
        onClick={handleLoginClick}
        style={{ margin: '10px', padding: '10px 20px' }}
      >
        로그인
      </button>
      <button
        onClick={handleJoinClick}
        style={{ margin: '10px', padding: '10px 20px' }}
      >
        회원가입
      </button>
      <button
        onClick={handleLogoutClick}
        style={{ margin: '10px', padding: '10px 20px' }}
      >
        로그아웃
      </button>
      
    </div>
  );
}

