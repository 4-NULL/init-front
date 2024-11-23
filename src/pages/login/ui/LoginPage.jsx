import { Form } from "react-router-dom";
export const LoginPage = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">로그인</h1>
        <Form action="#" method="POST">
          <div className="mb-6">
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">아이디</label>
            <input
              type="text"
              id="id"
              name="id"
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="이메일을 입력하세요"
              required
              />
          </div>
          <div className="mb-6">
            <label>비밀번호</label>
            <input
              type="password"
              id="pw"
              name="pw"
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>
          <div className="mt-8">
            <button type="submit" className="w-full bg-indigo-300 text-white p-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">로그인</button>
          </div>
        </Form>
      </div>
    </div>
  );
};
