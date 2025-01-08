import PropTypes from "prop-types"
import { Link } from "react-router-dom"

/**
 * 사이드바 (하단)
 * @param {*} param0 user (사용자 정보), handleLogout (로그아웃 이벤트)
 * @returns 
 */
export function SidebarBottom({user, handleLogout}) {

    const {
        profileImage = '#',
        name = '',
        email = '-'
    } = user || {};

    return (
        <div className="absolute bottom-0 w-60 p-4 border-t">
            <div>
                <div className="flex items-center mb-4">
                    <img src={profileImage} alt={name ? name : 'User'} className="w-8 h-8 rounded-full bg-gray-200" />
                    <div>
                        <p className="ml-2 text-sm text-gray-600">{name ? name : '로그인 후 이용 가능'}</p>
                        <p className="ml-2 text-sm text-gray-600">{email}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    {
                        user ?
                        (
                            // 로그인
                            <>
                                <button onClick={handleLogout} className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-center">로그아웃</button>
                                <Link to="/profile" className="flex-1 py-2 px-4 bg-black text-white rounded hover:bg-gray-800 text-center">내 정보</Link>
                            </>
                        ) : (
                            // 비로그인
                            <>
                                <Link to="/login" className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-center">로그인</Link>
                                <Link to="/join" className="flex-1 py-2 px-4 bg-black text-white rounded hover:bg-gray-800 text-center">회원가입</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

SidebarBottom.propTypes = {
    user: PropTypes.shape({
        profileImage: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
    }),
    handleLogout: PropTypes.func,
}