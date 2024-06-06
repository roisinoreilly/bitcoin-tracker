import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracker from "./pages/Tracker";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tracker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
