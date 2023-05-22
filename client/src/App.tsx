import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Join } from "./pages/auth/Join";
import { Login} from "./pages/auth/Login";
import { Auth } from "./pages/auth/Auth";
import Home from "./pages/Home";
import { list as BoardList } from "./pages/board/List";
import { view as BoardView } from "./pages/board/View";
import { post as BoardPost } from "./pages/board/Post";
import { CookiesProvider } from "react-cookie";
import { Layout } from "./components/common/LayoutComponent";

function App() {
    return (
        <CookiesProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/board">
                            <Route path="" element={<BoardList/>} />
                            <Route path=":postId" element={<BoardView/>}/>
                            <Route path="post" element={<BoardPost/>}/>
                        </Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </CookiesProvider>
    );
}

export default App;
