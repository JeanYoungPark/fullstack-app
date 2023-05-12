import { Middleware } from 'redux';
import Cookies from 'js-cookie';
import { logout } from "../slices/authSlice";

const authMiddleware: Middleware = ({ getState, dispatch }) => (next) => (action) => {
    // 컴포넌트가 아니라 리액트 훅 사용 불가능
    const isLoggedIn = getState().auth.isLoggedIn;
    const loginStateCookie = Cookies.get('loginState');

    if (!loginStateCookie && isLoggedIn) {
        dispatch(logout());
    }
    
    return next(action);
}

export default authMiddleware;