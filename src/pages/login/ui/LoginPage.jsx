
import { Input } from '@shared/ui';
import { Submit } from '@shared/ui';
import { POST } from "@shared/api";
import { useOutletContext, Form, useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await POST('/auth/login', formData)

    if (res.success) {
      alert(res.message);
      localStorage.setItem("user", JSON.stringify(res.data)); // 사용자 정보 저장
      setUser(res.data);
      return navigate('/');  // 페이지 리로드 없이 클라이언트 측 리다이렉션
    } else {
      // 로그인 중 에러발생
      alert(res.message);
      return false;
    }

  }

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">로그인</h1>
        <Form action="#" method="POST"
          onSubmit={handleSubmit}
        >
          <Input
              type="id"
              id="id"
              name="id"
              label="아이디"
              placeholder="아이디를 입력하세요"
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
          <Submit
              type="submit"
              label="로그인"
          />
        </Form>
      </div>
    </div>
  );
};
