import { useLoaderData } from "react-router-dom";

// const DUMMY_LESSON_LIST = [
    
//     {
//         seq: 1,
//         title: "React 커리큘럼 기본편",
//         content: "이 레슨에서는 React의 기본 개념을 배웁니다."
//     }, 
//     {
//         seq: 2,
//         title: "React 커리큘럼 심화편",
//         content: "이 레슨에서는 React의 심화 내용을 다룹니다."
//     },

//     {
//         seq: 3,
//         title: "JavaScript 커리큘럼 기본편",
//         content: "이 레슨에서는 JavaScript의 기본 개념을 배웁니다."
//     }, 
//     {
//         seq: 4,
//         title: "JavaScript 커리큘럼 심화편",
//         content: "이 레슨에서는 JavaScript의 심화 내용을 다룹니다."
//     },
//     {
//         seq: 5,
//         title: "Node.js와 Express 커리큘럼 기본편",
//         content: "이 레슨에서는 Node.js의 기본 개념을 배웁니다."
//     }, 
//     {
//         seq: 6,
//         title: "Node.js와 Express 커리큘럼 심화편",
//         content: "이 레슨에서는 Node.js의 심화 내용을 다룹니다."
//     }
    
// ];

export function LessonDetailPage () {
    // const {seq} = useParams()
    const lesson = useLoaderData()
    // const lesson = DUMMY_LESSON_LIST.filter(item => item.seq == seq);

    // useEffect(() => {
    //     setLesson(DUMMY_LESSON_LIST.filter(item => item.seq === parseInt(seq))[0])
    // }, [])


    if (!lesson) {
        return <div>레슨을 찾을 수 없습니다.</div>;
    }

    return (
        <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h1 style={{ fontSize: '24px', color: '#333' }}>{lesson.title}</h1>
            <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#666' }}>{lesson.content}</p>
        </div>
    );
};

