import { useEffect } from 'react';

import { GroupItem } from '@entities/group';

import { Link, useLoaderData } from 'react-router-dom';


export function HomePage() {

  const savedUser = localStorage.getItem("user");
  const isLoggedIn = savedUser !== null; // 로그인 여부 확인
  const groups = useLoaderData();

  useEffect(() => {
    console.log(groups)
  }, [])
  
  return (
    <div className="p-4">
      <div className='flex flex-col gap-2'>
      {isLoggedIn ? (
        <div>
          {
            groups.map(group => <GroupItem key={group.seq} data={group} />)
          }
        </div>

      ): (
        <div>
        {/* 로그아웃한 사용자에게 메시지 또는 로그인 프롬프트 렌더링 */}
        <h2>로그인 후 그룹을 확인하세요.</h2>
        <Link to="/login">로그인 페이지로 이동</Link>
      </div>
      )}
      </div>
    </div>
  );
}

