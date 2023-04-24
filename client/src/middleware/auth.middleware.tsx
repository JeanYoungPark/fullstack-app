import { Middleware } from 'redux';
import { RootState } from '../store';
import { Cookies } from "react-cookie";
import { useDispatch, useSelector } from 'react-redux';

const authMiddleware = (element: JSX.Element) => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  // 만약 로그인하지 않은 상태에서 로그인이 필요한 페이지에 접근하면 로그인 페이지로 리다이렉트합니다.
  if (!auth.isLoggedIn) {
    window.location.href = '/login';
  }else{
    // console.log(authCookie);
  }

  return element;
};

export default authMiddleware;
