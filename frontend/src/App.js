import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import AddBooks from "./pages/AddBooks";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addBooks" element={<AddBooks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
