import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface AuthFormComponentProps {
    service: string;
    onSuccess: Function;
}

const AuthFormComponent: React.FC<AuthFormComponentProps> = (props) => {
    interface Data {
        email: string;
        password: string;
    }

    const isLoggedIn = useSelector((state: RootState) => state.auth);
    const [naverLoginUrl, setNaverLoginUrl] = useState("");
    const [kakaoLoginUrl, setKakaoLoginUrl] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);
            const data: Data = {
                email: formData.get("email") as string,
                password: formData.get("password") as string,
            };
            const response = await axios.post(
                `http://localhost:5000/auth/${props.service}`,
                data
            );

            if (response.status === 200) {
                props.onSuccess(response.data);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError<{ message: string }>;
                if (axiosError.response?.data) {
                    const errorMessage = axiosError.response.data.message;
                    alert(errorMessage);
                }
            }
        }
    };

    // 네이버 로그인 URL 가져오기
    const fetchNaverLoginUrl = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/oauth/naver-login-url"
            );
            setNaverLoginUrl(response.data.url);
        } catch (error) {
            console.log(error);
        }
    };

    // 카카오 로그인 URL 가져오기
    const fetchKakaoLoginUrl = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/oauth/kakao-login-url"
            );
            setKakaoLoginUrl(response.data.url);
        } catch (error) {
            console.log(error);
        }
    };

    // 컴포넌트가 처음 렌더링될 때 네이버 로그인 URL을 가져옴
    useEffect(() => {
        fetchNaverLoginUrl();
        fetchKakaoLoginUrl();
    }, []);

    const handleGoogleClidk = () => {
        alert("서비스 준비중입니다.");
    };

    const handleNaverClick = () => {
        window.location.href = naverLoginUrl;
    };

    const handleKakaoClick = () => {
        window.location.href = kakaoLoginUrl;
    };

    return (
        <div className="container__wrapper">
            <h1 className="logo text-center">logo</h1>
            <p className="text-center">하나의 계정으로 서비스를 이용하세요.</p>
            <div className="socialLogin">
                <p className="txt text-center">
                    다른 서비스로
                    {props.service === "login" ? "로그인" : "회원가입"}
                </p>
                <ul className="socialLogin__box">
                    <li className="el google">
                        <span onClick={handleGoogleClidk}>구글</span>
                    </li>
                    <li className="el naver">
                        <span onClick={handleNaverClick}>네이버</span>
                    </li>
                    <li className="el kakao">
                        <span onClick={handleKakaoClick}>카카오톡</span>
                    </li>
                </ul>
            </div>
            <div className="or">
                <div className="mid-line"></div>
                <p className="txt text-center">또는</p>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <p>
                        <input
                            type="text"
                            name="email"
                            placeholder="이메일"
                        ></input>
                    </p>
                    <p>
                        <input
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                        ></input>
                    </p>
                    <button type="submit">
                        {props.service === "login" ? "로그인" : "회원가입"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthFormComponent;
