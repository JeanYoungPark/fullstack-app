import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Join from "./pages/user/Join";
import Login from "./pages/user/Login";
import Auth from "./pages/user/Auth";
import { CookiesProvider } from "react-cookie";

function App() {
    return (
        <CookiesProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/join" element={<Join />}/>
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </Router>
        </CookiesProvider>
    );
}

export default App;
