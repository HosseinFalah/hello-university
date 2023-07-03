import { Link } from "react-router-dom";

import { HiOutlineDownload, HiOutlineMoon } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser, FiShoppingCart, FiBook, FiUsers } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { TfiBook } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

const Header = () => {
    return (
        <header className="container m-auto max-w-screen-xl">
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <img 
                        src="/Images/Logo.png" 
                        className="w-60 object-cover"
                        alt="Logo" />
                    <div className="relative">
                        <input 
                            type="text" 
                            className="ring-1 ring-gray-500 p-2 px-10 rounded-3xl bg-secondary placeholder:text-secondary outline-none w-96"
                            placeholder="همین حالا جستجو کنید..." />
                        <BiSearch className="absolute top-2 right-2 text-gray-600 font-semibold" size={23}/>
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <button className="bg-primary-100 ring-1 ring-primary text-primary rounded-2xl p-2">
                        <HiOutlineMoon size={25}/>
                    </button>
                    <div className="border-l border-gray-400"></div>
                    <button className="bg-primary-100 ring-1 ring-primary text-primary rounded-2xl p-2">
                        <FiUser size={25}/>
                    </button>
                    <div className="border-l border-gray-400"></div>
                    <button className="bg-primary-100 ring-1 ring-primary text-primary rounded-2xl p-2">
                        <FiShoppingCart size={25}/>
                    </button>
                </div>
            </nav>
            <div className="flex items-center justify-between">
                <ul className="flex items-center gap-x-4">
                    <li className="flex items-center border-l border-gray-500 pl-6">
                        <Link className="text-secondary font-medium flex items-center text-sm gap-2">
                            <AiOutlineHome className="text-[#747474]" size={22}/>
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className="flex items-center border-l border-gray-500 pl-6">
                        <Link className="text-secondary font-medium flex items-center text-sm gap-2">
                            <FiBook className="text-[#747474]" size={22}/>
                            محصولات
                        </Link>
                    </li>
                    <li className="flex items-center border-l border-gray-500 pl-6">
                        <Link className="text-secondary font-medium flex items-center text-sm gap-2">
                            <TfiBook className="text-[#747474]" size={22}/>
                            مقالات
                        </Link>
                    </li>
                    <li className="flex items-center border-l border-gray-500 pl-6">
                        <Link className="text-secondary font-medium flex items-center text-sm gap-2">
                            <FiUsers className="text-[#747474]" size={22}/>
                            درباره ما
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link className="text-secondary font-medium flex items-center text-sm gap-2">
                            <BsTelephone className="text-[#747474]" size={22}/>
                            تماس با ما
                        </Link>
                    </li>
                </ul>
                <button className="bg-primary-900 text-white py-2.5 px-4 rounded-xl flex items-center gap-x-2">
                    <HiOutlineDownload size={22}/>
                    دانلود اپلیکیشن
                </button>
            </div>
        </header>
    )
}

export default Header