import "./App.css";
import Nav from "./components/Nav";
import UnderHome from "./components/UnderHome";
import Home from "./components/Home";
import List from "./components/List";
import Cart from "./components/Cart";
import { CartProvider } from "react-use-cart";
import CardDetails from "./components/CardDetails";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/Shopping/:product" element={<CardDetails />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/Shopping"
            element={
              <CartProvider>
                <Cart />
                <List />
              </CartProvider>
            }
          />
          <Route path="/Offers" element={<UnderHome />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
