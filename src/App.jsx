import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracker from "./pages/Tracker/Tracker";
import Converter from "./pages/Converter/Converter";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Nav/>
        <Routes>
          <Route path="/" element={<Tracker />} />
          <Route path="/converter" element={<Converter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
