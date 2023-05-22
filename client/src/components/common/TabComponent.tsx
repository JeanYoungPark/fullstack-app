import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { logout } from "../../slices/authSlice";
import { CommonTab, CommonList, CommonTabLinkWrap, CommonTabLink } from "../../styles/common"
import { useCookies } from "react-cookie";

export const TabComponent = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const [,,removeCookies] = useCookies(["loginState"]);
    
    const handleOnClick = useCallback(() => {
        dispatch(logout());
        removeCookies('loginState');
        window.location.href = "/";
    }, []);

    return (
        <CommonTab>
            <h1>logo</h1>
            <CommonList>
                <li><CommonTabLink href="/board">게시판</CommonTabLink></li>
            </CommonList>
            <div>
                {!isLoggedIn ? (
                    <CommonTabLinkWrap>
                        <CommonTabLink href="/login">로그인</CommonTabLink>
                        <CommonTabLink className="pd-left" href="/join">회원가입</CommonTabLink>
                    </CommonTabLinkWrap>
                ) : (
                    <span onClick={handleOnClick}>로그아웃</span>
                )}
            </div>
        </CommonTab>
    )
}