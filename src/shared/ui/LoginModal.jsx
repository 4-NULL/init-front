import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export function LoginModal({ prevPage = '' }) {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 shadow-lg text-center">
            <p className="text-lg font-bold bg-orange-100">로그인 안내</p>
            <p className="text-sm mt-4">해당 메뉴는 로그인이 필요한 업무입니다.</p>
            <p className="text-sm">로그인 화면으로 이동 하시겠습니까?</p>
            <div className="mt-4">
                <Link to={'/login'} className={"mb-2 items-center px-4 py-2 mx-3 bg-black text-white rounded-lg"}>
                    <span>Go Login</span>
                </Link>
                <Link to={`/${prevPage}`} className={"mb-2 items-center px-4 py-2 mx-3 bg-white text-black rounded-lg border-2"}>
                    <span>Go {prevPage == '' ? 'Home' : prevPage}</span>
                </Link>
            </div>
        </div>
    )
}

LoginModal.propTypes = {
    prevPage: PropTypes.string
}