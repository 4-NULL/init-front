// CurriculumList.jsx
export const DUMMY_CURRICULUM_LIST = [
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

export function CurriculumList() {
  return DUMMY_CURRICULUM_LIST;
}

export default CurriculumList;