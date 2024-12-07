
import { Form, useLoaderData, useParams } from "react-router-dom";
import { Input, Submit } from '@shared/ui';
import { useEffect, useState } from "react";

export function CurriculumActionPage() {
    const info = useLoaderData();
    const { actionType } = useParams();
    const [ method, setMethod ] = useState("POST");
    const [ actionText, setActionText ] = useState("");

    const [formData, setFormData] = useState({
        title: info?.title || "",
        description: info?.description || ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value // 변경된 필드만 업데이트
        }))
    }

    useEffect(() => {
        console.log(actionType)
        if (actionType === "create") {
            setMethod("POST");
            setActionText("정보 등록");
        } else if (actionType === "edit" || actionType === "partial-edit") {
            setMethod("PUT");
            setActionText("정보 수정");
        } else if (actionType === "delete") {
            setMethod("DELETE");
            setActionText("정보 삭제");
        } else {
            setMethod("POST");
            setActionText("정보 처리");
        }
    }, [actionType]);

    return (
        <div className="bg-gray-50 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-6">{actionText}</h1>
                <Form action="#" method={method}>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        label="제목"
                        maxLen="20"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="제목을 입력하세요"
                        required={true}
                        />
                    <Input
                        type="text"
                        id="description"
                        name="description"
                        label="설명"
                        maxLen="255"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="설명을 입력하세요"
                        required={true}
                    />
                    <Submit
                        type="submit"
                        label={actionText}
                    />
                </Form>
            </div>
        </div>
    )
}