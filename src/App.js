import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { BlogsPage } from "./components/pages/BlogsPage";
import { Navbar } from "./components/common/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="blogs" element={<BlogsPage />} />
      </Routes>
    </>
  );
}

export default App;
