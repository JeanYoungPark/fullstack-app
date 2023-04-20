import './styles.css';
import AuthFormComponent from '../../components/AuthFormComponent';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const Login = () => {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['loginState']);

    interface tokenResponseProps {
        email: string;
        token: string;
    }

    const handleSuccess = (res: tokenResponseProps) => {
        setCookie('loginState', res.token, {path: '/', maxAge: 86400});
        navigate('/');
    };

    return (
        <div className="container fixed">
            <AuthFormComponent service='login' onSuccess={handleSuccess}/>
        </div>
    )
}

export default Login