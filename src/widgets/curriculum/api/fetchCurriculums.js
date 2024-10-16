import callAPI from "../../../shared/api/callApi";

export default  async function fetchCurriculums () {
    try {
        const data = await callAPI('/curriculum'); // 전체 커리큘럼 조회
        return data
    } catch (error) {
        console.error("Failed to fetch curriculums:", error);
    }
};