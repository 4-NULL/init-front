import { useLoaderData } from "react-router-dom";


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

