import Home from "./pages/Home";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Announcement />
              <Home />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route
          path="/categories"
          element={
            <>
              <Navbar />
              <Announcement />
              <Categories />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <Navbar />
              <Announcement />
              <Product />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Announcement />
              <Cart />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
