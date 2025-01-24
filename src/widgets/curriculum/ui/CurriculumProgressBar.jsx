import PropTypes from "prop-types"

export function CurriculumProgressBar({ title, description, progress }) {
    return (
        <section className="flex flex-col w-full mt-5 p-4 font-bold border border-black rounded-lg">
            <div className="space-y-2">
                {/* 제목 */}
                <div className="flex justify-between">
                    <div className="text-left">{title}</div>
                    <div className="text-right">{description}</div>
                </div>
                {/* 프로그래스바 */}
                <div className="w-full bg-gray-300 rounded-full">
                    <div className=" bg-green-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </section>
    )
}

CurriculumProgressBar.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    progress: PropTypes.number.isRequired, // 진행도 (0~100%)
}