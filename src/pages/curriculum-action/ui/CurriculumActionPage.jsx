
import { Form, useLoaderData, useParams } from "react-router-dom";
import { Input, Submit } from '@shared/ui';
import { useEffect, useState } from "react";

export function CurriculumActionPage() {;
    const info = useLoaderData()
    const { seq } = useParams();
    const [method, setMethod] = useState("");
    const [actionTxt, setActionTxt] = useState("");
    const [formData, setFormData] = useState({
        title: info ?.title || "",
        description: info ?.description || ""
    });
    
    // 렌더링시 실행
    useEffect(() => {
        setMethod(!seq ? "POST" : "PUT");
        setActionTxt(!seq ? "등록" : "변경");
    }, [seq]);


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
                <h1 className="text-2xl font-bold text-center mb-6">커리큘럼 {actionTxt}</h1>
                <Form action="#" method={method}>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        label="제목"
                        maxLen="20"
                        placeholder="제목을 입력하세요"
                        required={true}
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                    <Input
                        type="text"
                        id="description"
                        name="description"
                        label="설명"
                        maxLen="255"
                        placeholder="설명을 입력하세요"
                        required={true}
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                    <Submit type="submit" label={actionTxt} />
                </Form>
            </div>
        </div>
    );
};