import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가

// 더미 데이터
const dummyCurriculumList = [
  {
    seq: 1,
    title: 'React 커리큘럼',
    description: 'React의 기본 개념과 사용법을 배워봅시다.',
  },
  {
    seq: 2,
    title: 'JavaScript 커리큘럼',
    description: 'JavaScript의 고급 기능들을 다뤄봅니다.',
  },
  {
    seq: 3,
    title: 'Node.js와 Express 커리큘럼',
    description: '백엔드 개발에 필요한 Node.js와 Express 사용법을 배워봅시다.',
  },
];

const CurriculumList = () => {
  const [curriculumList, setCurriculumList] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    // 더미 데이터 사용
    setCurriculumList(dummyCurriculumList);
  }, []);

  // 클릭 시 해당 커리큘럼으로 이동하는 함수
  const handleClick = (seq) => {
    navigate(`/curriculum/${seq}`); // 페이지 이동
  };

  return (
    <div>
      <h1>커리큘럼 리스트</h1>
      <ul>
        {curriculumList.map(({ seq, title, description }) => (
          <li key={seq} style={{ marginBottom: '20px' }} onClick={() => handleClick(seq)}>
            <h2>{title}</h2>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurriculumList;
