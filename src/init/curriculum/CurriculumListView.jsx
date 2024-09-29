import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DUMMY_CURRICULUM_LIST } from './CurriculumList'; // CurriculumList.jsx에서 데이터 가져오기

const CurriculumDetail = () => {
  const navigate = useNavigate();

  const handleClick = (seq) => {
    navigate(`/curriculum/${seq}`); // 커리큘럼 상세 페이지로 이동
  };

  return (
    <div>
      <h1>커리큘럼 리스트</h1>
      <div>
        {DUMMY_CURRICULUM_LIST.map(({ seq, title, description }) => (
          <div
            key={seq}
            onClick={() => handleClick(seq)}
            style={{ 
              display: 'inline-block', 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '10px', 
              margin: '10px', 
              cursor: 'pointer' 
            }}
          >
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumDetail;
