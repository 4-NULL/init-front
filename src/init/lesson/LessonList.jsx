const DUMMY_LESSON_LIST = [
    [
        {
            seq: 1,
            title: "curriculum1-lesson1"
        }, 
        {
            seq: 2,
            title: "curriculum1-lesson2"
        }
    ], //curriculum1 - lesson
    [
        {
            seq: 3,
            title: "curriculum2-lesson1"
        }, 
        {
            seq: 4,
            title: "curriculum2-lesson2"
        }
    ], 
    [
        {
            seq: 5,
            title: "curriculum3-lesson1"
        }, 
        {
            seq: 6,
            title: "curriculum3-lesson2"
        }
    ]
]


export async function LessonList({curriculumSeq}) {

    return (
        <div>
            {
                DUMMY_LESSON_LIST[curriculumSeq - 1].map(lessonItem => 
                    <div id={`lesson-${lessonItem.seq}`}>
                        {lessonItem.title}
                    </div>
                )
            }
        </div>
    )
}