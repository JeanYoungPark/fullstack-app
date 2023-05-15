import React, { useEffect } from 'react';
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from "../store";
import { logout } from '../slices/authSlice';

const withAuth = (
    WrappedComponent: React.ComponentType
) => {
    const Component = () => {
        const isLogin = useSelector((state: RootState) => state.auth.isLoggedIn);
        const navigate = useNavigate();
        const [Cookie,] = useCookies(["loginState"]);
        
        useEffect(()=>{
            if(Object.keys(Cookie).length > 0){
                if(!isLogin){
                    alert('로그인 후 이용 가능합니다.');
                    navigate('/login');
                }
            }else{
                alert('로그인 후 이용 가능합니다.');
                navigate('/login');
            }
        }, []);

        return <WrappedComponent />;
    }

    return Component;
}

const withNoAuth = (
    WrappedComponent: React.ComponentType
) => {
    const Component = () => {
        const isLogin = useSelector((state: RootState) => state.auth.isLoggedIn);
        const navigate = useNavigate();
        const [Cookie,] = useCookies(["loginState"]);
        const dispatch = useDispatch();
        
        useEffect(()=>{
            // 쿠키 만료 && 로그인 되어 있음 => 로그아웃 처리
            if(Object.keys(Cookie).length === 0){
                if(isLogin){
                    dispatch(logout());
                }else{
                    alert('비회원만 이용 가능합니다.');
                    navigate('/');
                }
            }else{
                alert('비회원만 이용 가능합니다.');
                navigate('/');
            }
        }, []);

        return <WrappedComponent />;
    }

    return Component;
}

export {withAuth, withNoAuth};