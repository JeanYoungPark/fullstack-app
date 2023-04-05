import './styles.css';
import AuthFormComponent from '../../components/AuthFormComponent';

const Login = () => {
    return (
        <div className="container fixed">
            <AuthFormComponent service='로그인'/>
        </div>
    )
}

export default Login