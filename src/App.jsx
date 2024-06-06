import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracker from "./pages/Tracker";
import Converter from "./pages/Converter";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tracker />} />
          <Route path="/converter" element={<Converter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
