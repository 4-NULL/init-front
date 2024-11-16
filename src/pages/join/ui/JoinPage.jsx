import { Form } from "react-router-dom";
export function JoinPage() {

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>회원가입</h1>
            <Form method="post" >

                <div>
                    <label>
                        이름:
                        <input name="name" type="text" placeholder="이름을 입력하세요" style={{ margin: '10px', padding: '5px' }} />
                    </label>
                </div>
                <div>
                    <label>
                        이메일:
                        <input type="email" placeholder="이메일을 입력하세요" style={{ margin: '10px', padding: '5px' }} />
                    </label>
                </div>
                <div>
                    <label>
                        아이디:
                        <input type="text" placeholder="아이디를 입력하세요" style={{ margin: '10px', padding: '5px' }} />
                    </label>
                </div>
                <div>
                    <label>
                        휴대폰번호:
                        <input type="tel" placeholder="'-'을 제외하고 입력하세요" style={{ margin: '10px', padding: '5px' }} />
                    </label>
                </div>
                <div>
                    <label>
                        비밀번호:
                        <input name="password" type="password" placeholder="비밀번호를 입력하세요" style={{ margin: '10px', padding: '5px' }} />
                    </label>
                </div>
                <div>
                    <label>
                        비밀번호 확인:
                        <input type="password" placeholder="비밀번호를 다시 입력하세요" style={{ margin: '10px', padding: '5px' }} />
                    </label>
                </div>
                <button type="submit" style={{ padding: '10px 20px' }}>회원가입</button>
            </Form>
        </div>
    );
};

