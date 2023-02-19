import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import reactLogo from './assets/react.svg'
import "./App.css";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <header className="bg-white py-4 px-8 flex justify-between shadow-md items-center text-center">
        <Link to="/">LOGO</Link>
        <Link to="/create" className="bg-black px-4 py-1 font-semibold text-[16px] rounded-lg text-white hover:bg-white hover:text-black border-2 border-black">Create</Link>
      </header>
      <main className="bg-gray-50 h-screen py-8 px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
