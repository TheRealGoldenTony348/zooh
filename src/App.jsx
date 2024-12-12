import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import PageOne from "./pages/page1";

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route index element={<Home/>} />
        <Route path={"pageone"} element={<PageOne/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

