import { CONST_GROUP_DUMMY, GroupItem } from '@entities/group';
import { logoutRequest } from '@pages/login';
import { useNavigate } from 'react-router-dom';


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
    <div className="p-4">
      <div className='flex flex-col gap-2'>
        {
          CONST_GROUP_DUMMY.map(group => <GroupItem key={group.seq} data={group} />)
        }
      </div>
    </div>
  );
}

