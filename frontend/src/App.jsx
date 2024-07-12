import Footer from "./components/footer/footer";
import Navbar from "./components/navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-main h-full ">
      <Navbar />
      {/* <Home /> */}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
