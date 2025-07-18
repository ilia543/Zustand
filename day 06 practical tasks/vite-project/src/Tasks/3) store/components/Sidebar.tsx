import { FaShoppingCart, 	FaUser } from "react-icons/fa";
import { Cart } from "./store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { count, price } = Cart()
  return (

    <div className="fixed top-0 h-15 w-full rounded-xl bg-sky-200 flex items-center">
      <Link to="/" className="text-3xl cursor-pointer ml-8 rounded-full bg-white w-12 h-12 flex justify-center items-center">
        <FaUser />
      </Link>

      <Link
        to="/cart"
        className="text-3xl cursor-pointer ml-8 rounded-full bg-white w-12 h-12 flex justify-center items-center"
      >
        <FaShoppingCart />
      </Link>

      <p className="text-xl ml-1 font-semibold">{count}</p>

      <p className="text-xl ml-4 font-semibold">Sum: {price}$</p>

    </div>
  );
}

export default Sidebar