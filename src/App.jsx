import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./container/Header";
import ProductListing from "./container/ProductListing";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductListing />} />
       
      </Routes>
    </Router>
  );
}

export default App;
