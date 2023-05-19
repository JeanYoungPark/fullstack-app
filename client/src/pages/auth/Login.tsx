import "../../styles/auth.css";
import { useCallback } from "react";
import { AuthFormComponent } from "../../components/AuthFormComponent";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../actions/authAction";
import { withNoAuth } from '../../hocs/withAuth';

export const Login = withNoAuth(() => {
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
        <div className="container">
            <AuthFormComponent service="login" onSuccess={handleSuccess} />
        </div>
    );
});
