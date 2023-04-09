import axios, { AxiosError } from 'axios';

interface AuthFormComponentProps {
    service: string;
    onSuccess: Function;
}

const AuthFormComponent : React.FC<AuthFormComponentProps> = (props) => {
    interface Data {
        email: string;
        password: string;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const formData = new FormData(e.currentTarget);
            const data: Data = {
                email: formData.get("email") as string,
                password: formData.get("password") as string
            }
            const response = await axios.post(`http://localhost:5000/users/${props.service}`, data);
            
            if(response.status === 200) {
                props.onSuccess(response.data); 
            }
        } catch (error) {
            if(axios.isAxiosError(error)){
                const axiosError = error as AxiosError<{message:string}>;
                if(axiosError.response?.data) {
                    const errorMessage = axiosError.response.data.message;
                    alert(errorMessage);
                }
            }
        }
    };
     
    return (
        <div className="container__wrapper">
            <h1 className='logo text-center'>logo</h1>
            <p className='text-center'>하나의 계정으로 서비스를 이용하세요.</p>
            <div className="socialLogin">
                <p className='txt text-center'>다른 서비스로 {props.service === 'login' ? '로그인' : '회원가입'}</p>
                <ul className="socialLogin__box">
                    <li className="el google"><span>구글</span></li>
                    <li className="el naver"><span>네이버</span></li>
                    <li className="el kakao"><span>카카오톡</span></li>
                </ul>
            </div>
            <div className='or'>
                <div className='mid-line'></div>
                <p className='txt text-center'>또는</p>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <p><input type="text" name="email" placeholder='이메일'></input></p>
                    <p><input type="password" name="password" placeholder='비밀번호'></input></p>
                    <button type="submit">{props.service === 'login' ? '로그인' : '회원가입'}</button>
                </form>
            </div>
        </div>
    )
}

export default AuthFormComponent