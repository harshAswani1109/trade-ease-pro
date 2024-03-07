// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">Fintech Relay</div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link href="/stockBuy" className="text-white">
              StockBuy
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/profile" className="text-white">
              profile
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <div className="text-white mr-2">Hi, User</div>
          <div className="bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
            U
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
