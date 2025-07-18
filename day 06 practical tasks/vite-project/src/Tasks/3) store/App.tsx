import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Shop from "./components/Shop";
import CartPage from "./components/page/CartPage";
function App() {
  return (
    <>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;