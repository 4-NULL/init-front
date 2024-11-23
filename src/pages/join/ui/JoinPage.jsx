import { Form } from "react-router-dom";
export function JoinPage() {
    // name과 백단의 엔티티 명과 동일하게 할 것
    return (
        <div className="bg-gray-50 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-6">회원가입</h1>
                <Form action="#" method="POST">
                    <div className="mb-6">
                        <label htmlFor="user" className="block text-sm font-medium text-gray-700">이름</label>
                        <input type="text"
                            id="user"
                            name="name"
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="이름을 입력하세요"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700" >이메일</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="이메일을 입력하세요"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="id" className="block text-sm font-medium text-gray-700">아이디</label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="아이디를 입력하세요"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">휴대폰번호</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="'-'을 제외하고 입력하세요"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="pw" className="block text-sm font-medium text-gray-700">비밀번호</label>
                        <input
                            type="password"
                            id="pw"
                            name="pw"
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="rePw" className="block text-sm font-medium text-gray-700">비밀번호 확인</label>
                        <input
                            type="password"
                            id="rePw"
                            name="rePw"
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="비밀번호를 다시 입력하세요"
                            required
                        />
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="w-full bg-indigo-300 text-white p-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">회원가입</button>
                    </div>
                </Form>
            </div>
        </div>
    );
};