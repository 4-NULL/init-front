// curriculum-list.jsx
import React, { useEffect, useState } from 'react';

// API 연결 전 더미데이터
const dummyCurriculumList = [
  {
    id: 1,
    title: 'React 기초 강의',
    description: 'React의 기본 개념과 사용법을 배워봅시다.',
    videoUrl: 'https://www.youtube.com/watch?v=abcd1234',
  },
  {
    id: 2,
    title: 'JavaScript 심화 강의',
    description: 'JavaScript의 고급 기능들을 다뤄봅니다.',
    videoUrl: 'https://www.youtube.com/watch?v=efgh5678',
  },
  {
    id: 3,
    title: 'Node.js와 Express',
    description: '백엔드 개발에 필요한 Node.js와 Express 사용법을 배워봅시다.',
    videoUrl: 'https://www.youtube.com/watch?v=ijkl9101',
  },
];

const CurriculumList = () => {
  const [curriculumList, setCurriculumList] = useState([]);

  // 컴포넌트가 마운트될 때 데이터 불러오기 (예시로 더미 데이터를 사용)
  useEffect(() => {
    // 실제로는 API 요청을 통해 데이터를 불러와야 함
    setCurriculumList(dummyCurriculumList);
  }, []);

  return (
    <div>
      <h1>커리큘럼 리스트</h1>
      <ul>
        {curriculumList.map((curriculum) => (
          <li key={curriculum.id} style={{ marginBottom: '20px' }}>
            <h2>{curriculum.title}</h2>
            <p>{curriculum.description}</p>
            <a
              href={curriculum.videoUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              유튜브에서 보기
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurriculumList;
