import { CONST_GROUP_DUMMY, GroupItem } from '@entities/group';


export function HomePage() {

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

