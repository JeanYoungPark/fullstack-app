import "./styles.css";
import AuthFormComponent from "../../components/AuthFormComponent";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../actions/authAction";
import { useCallback } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [, setCookie] = useCookies(["loginState"]);
    const dispatch = useDispatch();

    interface tokenResponseProps {
        email: string;
        token: string;
    }

    const handleSuccess = useCallback((res: tokenResponseProps) => {
        dispatch(loginSuccess(res.token));
        setCookie("loginState", res.token, { path: "/", maxAge: 86400 });
        navigate("/");
    }, []);

    return (
        <div className="container fixed">
            <AuthFormComponent service="login" onSuccess={handleSuccess} />
        </div>
    );
};

export default Login;
