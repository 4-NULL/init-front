import { useEffect } from 'react';

import { CONST_GROUP_DUMMY, GroupItem } from '@entities/group';
import { logoutRequest } from '@pages/login';
import { useNavigate, useLoaderData } from 'react-router-dom';


export function HomePage() {
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const groups = useLoaderData();

  useEffect(() => {
    console.log(groups)
  }, [])
  
  return (
    <div className="p-4">
      <div className='flex flex-col gap-2'>
        {
          groups.map(group => <GroupItem key={group.seq} data={group.name} />)
        }
      </div>
    </div>
  );
}

