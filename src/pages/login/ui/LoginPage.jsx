import { Input, Submit } from "@shared/ui";
import { useEffect } from "react";
import { Form, useNavigation, useActionData } from "react-router-dom";
import { useUser } from "@shared/context";
export const LoginPage = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const actionData = useActionData();

  const { login } = useUser();

  useEffect(() => {
    if (actionData?.success) login(actionData.data);
  }, [actionData]);

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          {isSubmitting ? "로그인 중..." : "로그인"}
        </h1>
        <Form action="#" method="POST">
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
          <Submit type="submit" label="로그인" />
        </Form>
      </div>
    </div>
  );
};
