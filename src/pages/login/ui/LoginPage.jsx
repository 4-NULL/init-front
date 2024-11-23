import { Form } from "react-router-dom";
export const LoginPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>로그인</h1>
      <Form method="post">
        <div>
          <label>
            아이디:
            <input
              name="id"
              type="text"
              placeholder="이메일을 입력하세요"
              style={{ margin: "10px", padding: "5px" }}
              />
          </label>
        </div>
        <div>
          <label>
            비밀번호:
            <input
              name="pw"
              type="password"
              placeholder="비밀번호를 입력하세요"
              style={{ margin: "10px", padding: "5px" }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          로그인
        </button>
      </Form>
    </div>
  );
};
