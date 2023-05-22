import styled from 'styled-components';

export const AuthContainer = styled.div`
    max-width: 30vw; margin: 0 auto; padding-top: 15vh;
`;

export const AuthLogo = styled.h2`
    width: 100%;
    text-align: center;
`;

export const AuthTxt = styled.p`
    text-align:center;
`;

export const AuthSocialWrap = styled.div`
    margin: 2vh 0;
`;

export const AuthSocialTxt = styled.p`
    padding: 1vh 0;
    text-align: center;
`;

export const AuthSocialWrapUl = styled.ul`
    display:flex;
    align-items: center;
    justify-content: space-around;

    li {
        padding: 5px;
        box-shadow:0 0 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
        border-radius: 5px;
        cursor:pointer;
        text-indent: -9999px;

        &.google {
            background-color:#fff;

            span {
                background-image: url('/images/google_logo.png');
            }
        }

        &.naver {
            background-color: #00bb12;

            span {
                background-image: url('/images/naver_logo.png');
            }
        }

        &.kakao {
            background-color: #ffdd31;

            span {
                background-image: url('/images/kakaoTalk_logo.png');
            }
        }

        span {
            display:block;
            width: 50px;
            height: 50px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
`;

export const AuthOr = styled.div`
    position:relative;

    div {
        position:absolute;
        top:50%;
        width: 100%;
        height:1px;
        background-color: #ced0da;
        z-index: -1;
    }

    p {
        width: 54px;
        margin:0 auto;
        background-color: #fff;9
        color:#90929e;
        text-align: center;
    }
`;

export const AuthForm = styled.div`
    padding:2vh 0;

    input {
        display: block;
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        box-sizing: border-box;
    }

    button {
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
        background-color: #ccc;
        color: #333;
        cursor: pointer;
    }
`;
