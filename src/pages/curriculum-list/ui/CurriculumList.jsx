
import { CurriculumItem } from '@entities/curriculums';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteAction } from '@pages/curriculum-action';

export function CurriculumList() {
    const curriculums = useLoaderData();

    const handleCurriculumDelete = (seq) => {
        const params = { seq };
        deleteAction({params})
    }

    return (
        <div className="mt-6">
            <div className='mt-6'>
                <Link to="/curriculum/create" className="m-3.5 py-2 px-4 border border-sky-300">등록</Link>
                <Link to="/curriculum/edit/2" className="m-3.5 py-2 px-4 border">수정</Link>
                <button onClick={() => { handleCurriculumDelete(7) }}>삭제</button>
            </div>
            <div className='mt-6'>
                <h1>커리큘럼 리스트</h1>
                {
                    curriculums.length > 0 ?
                    (
                        <div>
                            {
                                curriculums.map((curriculum) => (
                                    <CurriculumItem key={curriculum.id} item={curriculum} />
                                ))
                            }
                        </div>

                    ) : (
                        <div>데이터 형식 오류: 커리큘럼 데이터가 배열이 아닙니다.</div>
                    )
                }
            </div>
        </div>
    );
}

export default CurriculumList;
