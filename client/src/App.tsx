import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Join from "./pages/user/Join";
import Login from "./pages/user/Login";
import Auth from "./pages/user/Auth";
import { CookiesProvider } from "react-cookie";
import authMiddleware from "./middleware/auth.middleware";
import { AuthAction } from "../src/actions/authActionType";

function App() {
    return (
        <CookiesProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={withMiddleware(<Login />, [authMiddleware])}/>
                    <Route path="/join" element={withMiddleware(<Join />, [authMiddleware])}/>
                    <Route path="/auth" element={withMiddleware(<Auth />, [authMiddleware])} />
                </Routes>
            </Router>
        </CookiesProvider>
    );
}

// Route element에 미들웨어를 추가하는 함수
function withMiddleware(element: JSX.Element, middlewares: ((element: JSX.Element) => JSX.Element)[]): JSX.Element {
  return middlewares.reduce((acc, middleware) => middleware(acc), element);
}

export default App;
