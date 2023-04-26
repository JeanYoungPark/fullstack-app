import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Join from "./pages/user/Join";
import Login from "./pages/user/Login";
import Auth from "./pages/user/Auth";
import { CookiesProvider } from "react-cookie";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
    return (
        <CookiesProvider>
            <Router>
                <Routes>
                    <PrivateRoute path="/login" component={<Login />}/>
                    <Route path="/join" component={<Join />}/>
                    <Route path="/auth" component={<Auth />} />
                </Routes>
            </Router>
        </CookiesProvider>
    );
}

export default App;
