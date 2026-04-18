import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import SigninPage from "./components/SigninPage";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;