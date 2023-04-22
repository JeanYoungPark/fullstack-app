import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Auth() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const loginState = cookies.get("loginState");
    const dispatch = useDispatch();

    useEffect(() => {
        navigate("/");
    }, [dispatch, navigate, loginState]);
    return <div></div>;
}

export default Auth;
