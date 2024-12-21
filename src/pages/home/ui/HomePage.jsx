import { useEffect } from 'react';

import { GroupItem } from '@entities/group';

import { useLoaderData, useOutletContext } from 'react-router-dom';


export function HomePage() {

  const groups = useLoaderData();

  const { user } = useOutletContext();

  useEffect(() => {
    console.log(user)
  }, [])
  
  return (
    <div className="p-4">
      <div className='flex flex-col gap-2'>
        {
          user? <>login</> : <>not login</>
        }
      </div>
    </div>
  );
}

