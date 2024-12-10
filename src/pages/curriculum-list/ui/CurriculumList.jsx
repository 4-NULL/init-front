
import { CurriculumItem } from '@entities/curriculums';
import { Link, useLoaderData } from 'react-router-dom';

export function CurriculumList() {
    const curriculums = useLoaderData();

    return (
        <div className="mt-6">
            <div className='mt-6'>
                <Link to="/curriculum/create"
                    className="flex text-center p-3 m-3 text-black border border-blue-300 rounded-lg hover:bg-blue-500 hover:text-white"
                >커리큘럼 등록
                </Link>
                <h1>커리큘럼 리스트</h1>
                {
                    curriculums.length > 0 ?
                    (
                        <div>
                            {
                                curriculums.map((curriculum) => (
                                    <CurriculumItem key={curriculum.seq} item={curriculum} />
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
