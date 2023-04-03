import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Join from "./pages/user/Join";
import Login from "./pages/user/Login";
// import MyComponent from './components/MyComponent';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<MyComponent/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/join" element={<Join/>} />
      </Routes>
    </Router>
  );
}

export default App;
