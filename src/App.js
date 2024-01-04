import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className=" w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>      
    </div>
    </BrowserRouter>
  );
}

export default App;


