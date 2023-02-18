import { useState } from "react";
import { BrowserRouter , Route, Routes, Link} from "react-router-dom";
// import reactLogo from './assets/react.svg'
import "./App.css";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <header className="bg-white py-4 px-8 shadow text-center">This is header.</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
