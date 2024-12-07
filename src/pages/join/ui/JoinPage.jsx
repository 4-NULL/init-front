import { Form } from "react-router-dom";
import { Input } from '@shared/ui';
import { Submit } from '@shared/ui';

export function JoinPage() {
    // name과 백단의 엔티티 명과 동일하게 할 것
    return (
        <div className="bg-gray-50 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-6">회원가입</h1>
                <Form action="#" method="POST">
                    <Input
                        type="text"
                        id="user"
                        name="user"
                        label="이름"
                        placeholder="이름을 입력하세요"
                        required={true}
                    />
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        label="이메일"
                        placeholder="이메일을 입력하세요"
                        required={true}
                    />
                    <Input
                        type="id"
                        id="id"
                        name="id"
                        label="아이디"
                        placeholder="아이디를 입력하세요"
                        required={true}
                    />
                    <Input
                        type="phoneNumber"
                        id="phoneNumber"
                        name="phoneNumber"
                        label="휴대폰번호"
                        minLen="11"
                        maxLen="11"
                        placeholder="'-'을 제외하고 입력하세요"
                        required={true}
                    />
                    <Input
                        type="password"
                        id="pw"
                        name="pw"
                        label="비밀번호"
                        placeholder="비밀번호를 입력하세요"
                        required={true}
                    />
                    <Input
                        type="password"
                        id="rePw"
                        name="rePw"
                        label="비밀번호 확인"
                        placeholder="비밀번호를 다시 입력하세요"
                        required={true}
                    />
                    <Submit
                        type="submit"
                        label="회원가입"
                    />
                </Form>
            </div>
        </div>
    );
}