import { createBrowserHistory } from 'history';

/**
 * history 객체 생성
 * - 라우터 외부에서 라우팅을 제어할 때 주로 사용됨
 */
const history = createBrowserHistory();

// 로그인 이동
export const handleMoveLoginPage = () => {
    if (window.confirm("해당 메뉴는  로그인이 필요한 업무입니다. 로그인 화면으로 이동하시겠습니까?")) {
        goLogin(); // 로그인으로 이동
    } else {
        goHome(); // 홈으로 이동
    }
}

// 특정페이지로 이동
export const goPage = (page) => {
    history.push(page);
}

// 로그인으로 이동
export const goLogin = () => {
    goPage("/login");
}

// 홈으로 이동
export const goHome = () => {
    goPage("/");
}

// 이전 페이지로 이동
export const goPrev = () => {
    history.back(); // history.go(-1)와 동일
}

// 앞으로 이동
export const goPost = () => {
    history.forward(); // history.go(1)와 동일
}

// 새로고침
export const refresh = () => {
    history.go(0);
}