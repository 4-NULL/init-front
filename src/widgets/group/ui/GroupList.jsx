// import { GroupItem } from "@entities/group";

// const CONST_GROUP_LIST = [
//   { name: "group1", seq: 1 },
//   { name: "group2", seq: 2 },
//   { name: "group3", seq: 3 },
// ];

// export function GroupList() {
//   return (
//     <div>
//       <h1>내 그룹 리스트</h1>
//       <div className="flex gap-2">
//         {CONST_GROUP_LIST.map((item) => (
//           <GroupItem key={item.seq} data={item} />
//         ))}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GET } from '@shared/api';

export function GroupList({ memberSeq }) {
    const [groups, setGroups] = useState([]); // 전체 그룹 데이터
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태

    const fetchGroups = async () => {
        try {
            const res = await GET('/groups', {
                params: memberSeq ? { memberSeq } : {},
            });
            setGroups(res.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    // memberSeq가 변경될 때마다 실행
    useEffect(() => {
        fetchGroups();
    }, [memberSeq]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {
                groups.length > 0 ?
                    groups.map(group => (
                        <Link
                            id={`group-${group.seq}`}
                            to={`/group/${group.seq}`}
                            className="border border-gray-300 rounded-lg p-2.5 w-48 shadow-sm cursor-pointer"
                            key={group.seq}
                        >
                            <h3>{group.name}</h3>
                        </Link>
                    ))
                    : <div> 그룹 정보가 없습니다. </div>
            }
        </div>
    );
}