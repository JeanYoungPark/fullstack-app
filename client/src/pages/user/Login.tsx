import './styles.css';
import AuthFormComponent from '../../components/AuthFormComponent';

const Login = () => {
    return (
        <div className="container fixed">
            <AuthFormComponent service='login'/>
        </div>
    )
}

export default Login