
import { Form, useLoaderData, useParams } from "react-router-dom";
import { Input, Submit, Textarea } from '@shared/ui';
import { useEffect, useState } from "react";

export function LessonActionPage() {
    const info = useLoaderData()
    const { curriculumSeq, seq } = useParams();
    const [method, setMethod] = useState("");
    const [actionTxt, setActionTxt] = useState("");
    const [formData, setFormData] = useState({
        curriculumSeq: curriculumSeq || "",
        title: info ?.title || "",
        content: info ?.content || ""
    });
    
    // 레슨 번호가 변경될 때마다 실행
    useEffect(() => {
        if (curriculumSeq) {
            setMethod("POST");
            setActionTxt("등록");
        } else if (seq) {
            setMethod("PUT");
            setActionTxt("변경");
        }
    }, []);
    
    // 정보가 변경될 때마다 실행
    useEffect(() => {
        setFormData({
            curriculumSeq: curriculumSeq || "",
            title: info ?.title || "",
            content: info ?.content || ""
        })
    }, [info])

    // 정보변경시 value 변경
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value, // 변경된 필드만 업데이트
        }));
    };
    
    return (
        <div className="bg-gray-50 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-6">수업 {actionTxt}</h1>
                <Form action="#" method={method}>
                    <input type="hidden" id="curriculumSeq" name="curriculumSeq" value={formData.curriculumSeq}></input>
                    <Input
                        type="hidden"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        label="수업 제목"
                        maxLen="20"
                        placeholder="수업 제목을 입력하세요"
                        required={true}
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                    <Textarea
                        id="content"
                        name="content"
                        label="컨텐츠"
                        maxLen="255"
                        placeholder="교육 컨텐츠 설명을 입력하세요"
                        required={true}
                        value={formData.content}
                        onChange={handleInputChange}
                    />
                    <Submit type="submit" label={actionTxt} />
                </Form>
            </div>
        </div>
    );
}