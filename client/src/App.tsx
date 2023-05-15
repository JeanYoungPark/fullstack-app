import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Join from "./pages/user/Join";
import Login from "./pages/user/Login";
import Auth from "./pages/user/Auth";
import Home from "./pages/Home";
import BoardList from "./pages/board/List";
import BoardView from "./pages/board/View";
import { CookiesProvider } from "react-cookie";
import TabComponent from "./components/TabComponent";

function App() {
    return (
        <CookiesProvider>
            <BrowserRouter>
                <TabComponent />
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="login" element={<Login />} />
                        <Route path="join" element={<Join />} />
                        <Route path="auth" element={<Auth />} />
                        <Route path="post" element={<BoardList/>}>
                            <Route path=":postId" element={<BoardView/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    );
}

export default App;
