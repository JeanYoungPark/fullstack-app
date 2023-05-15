import { useNavigate } from "react-router"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../store";
import { logout } from "../slices/authSlice";

function TabComponent() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(logout());
        navigate("/");
    }

    return (
        <ul>
            <li onClick={() => navigate('/post')}>board</li>
            {isLoggedIn && <li onClick={handleOnClick}>logout</li>}
        </ul>
    )
}

export default TabComponent;