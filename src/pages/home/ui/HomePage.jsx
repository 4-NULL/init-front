import { useEffect } from 'react';

import { GroupItem } from '@entities/group';

import { useLoaderData } from 'react-router-dom';


export function HomePage() {

  const groups = useLoaderData();

  useEffect(() => {
    console.log(groups)
  }, [])
  
  return (
    <div className="p-4">
      <div className='flex flex-col gap-2'>
        {
          groups.map(group => <GroupItem key={group.seq} data={group} />)
        }
      </div>
    </div>
  );
}

