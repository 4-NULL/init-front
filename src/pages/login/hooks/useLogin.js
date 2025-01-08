import { loginRequest } from '@pages/login';
import { useNavigate, useOutletContext } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    const { setUser } = useOutletContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const res = await loginRequest(formData, setUser);

        if (res) {
            // 로그인 성공으로 Home 화면으로 이동
            return navigate('/');
        }
    }

    return { handleSubmit };
}