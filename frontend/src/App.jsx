import Footer from "./components/footer/footer";
import Navbar from "./components/navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetails from "./pages/itemDetails";

function App() {
  return (
    <Router>
      <div className="bg-main h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item" element={<ItemDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
