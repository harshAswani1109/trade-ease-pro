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
              Profile
            </Link>
          </li>
          <li>
            <Link href="/subscription" className="text-white">
              Subscription
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <div className="text-white mr-2">Hi, User</div>
          <div className="bg-white rounded-full text-gray-800 overflow-hidden w-8 h-8 flex items-center justify-center">
            <img src="https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg"></img>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
