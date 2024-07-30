import Footer from "./components/footer/footer";
import Navbar from "./components/navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetails from "./pages/itemDetails";
import Shop from "./pages/shop";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <div className="bg-main h-full ">
        <div className="mx-2">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item" element={<ItemDetails />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
