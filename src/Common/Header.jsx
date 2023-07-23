import { Link } from "react-router-dom";

import { HiOutlineMoon } from "react-icons/hi";
import { FiUser, FiBook, FiDownload, FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
    return (
        <header className="container m-auto max-w-screen-xl">
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <img 
                        src="/Images/Logo.png" 
                        className="aspect-w-16 h-20 object-cover"
                        alt="Logo" />
                    <div className="flex items-center justify-between">
                        <ul className="flex items-center gap-x-4">
                            <li className="flex items-center border-r border-gray-400 pr-4">
                                <Link className="text-secondary font-medium flex items-center text-sm gap-2">
                                    <FiBook className="text-[#747474]" size={22}/>
                                    محصولات
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link className="text-secondary font-medium flex items-center text-sm gap-2">
                                    <FiDownload className="text-[#747474]" size={22}/>
                                    دانلود اپلیکیشن
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link className="text-secondary font-medium flex items-center text-sm gap-2">
                                    <FiSearch className="text-[#747474]" size={22}/>
                                    جستجو
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <button className="bg-primary-900 text-white py-2.5 px-4 rounded-xl flex items-center gap-x-2">
                        <FiShoppingBag size={22}/>
                        خرید اشتراک
                    </button>
                    <div className="border-l border-gray-300"></div>
                    <button className="bg-primary-100 ring-1 ring-primary text-primary rounded-2xl p-2">
                        <HiOutlineMoon size={25}/>
                    </button>
                    <div className="border-l border-gray-300"></div>
                    <button className="bg-primary-100 ring-1 ring-primary text-primary rounded-2xl p-2">
                        <FiUser size={25}/>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header