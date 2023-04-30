import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Join from "./pages/user/Join";
import Login from "./pages/user/Login";
import Auth from "./pages/user/Auth";
import Home from "./pages/Home";
import BoardList from "./pages/board/List";
import { CookiesProvider } from "react-cookie";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    return (
        <CookiesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/login"
                        element={!isLoggedIn ? <Login /> : <Home />}
                    />
                    <Route
                        path="/join"
                        element={!isLoggedIn ? <Join /> : <Home />}
                    />
                    <Route
                        path="/auth"
                        element={!isLoggedIn ? <Auth /> : <Home />}
                    />
                    <Route path="/board" element={<BoardList />} />
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    );
}

export default App;
