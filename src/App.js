import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import Home from "./routes/home/home.component";
import Category from "./routes/category/category.component";
import Product from "./routes/product/product.component";
import Register from "./routes/register/register.component";
import Login from "./routes/login/login.component";
import Cart from "./routes/cart/cart.components";
import Success from "./routes/success/success.component";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/products/:category" element={<Category />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Register />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/success" element={<Success />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
