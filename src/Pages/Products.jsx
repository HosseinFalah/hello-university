import { BiDollar } from "react-icons/bi"
import { FiBook, FiSearch, FiUserCheck } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Ads } from "@/Common"

const Products = () => {
    return (
        <div>
            <div className="bg-primary-200 p-5 my-5 rounded-2xl">
                <div className="flex items-center gap-x-2">
                    <FiSearch className="text-white" size={30}/>
                    <input 
                        type="text" 
                        className="p-2 px-6 rounded-lg bg-inherit text-white placeholder:text-white placeholder:text-2xl border-none outline-none" 
                        placeholder="نتایج جستجو شما ..."/>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <aside className="col-span-3 space-y-8">
                    <div className="border border-[#9D9D9D] rounded-xl py-4">
                        <p className="text-base text-secondary font-semibold text-center mb-4">فیلتر بر اساس نوع</p>
                        <div className="divide-y">
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">کتاب</label>
                            </div>
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">کتاب</label>
                            </div>
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">کتاب</label>
                            </div>
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">کتاب</label>
                            </div>
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">کتاب</label>
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#9D9D9D] rounded-xl py-4">
                        <p className="text-base text-secondary font-semibold text-center mb-4">فیلتر بر اساس دانشگاه</p>
                        <div className="divide-y">
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">پیام نور</label>
                            </div>
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">آزاد اسلامی</label>
                            </div>
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">علمی کاربردی</label>
                            </div>
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">امام صادق (ع)</label>
                            </div>
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">تهران</label>
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#9D9D9D] rounded-xl py-4">
                        <p className="text-base text-secondary font-semibold text-center mb-4">فیلتر بر اساس مقطع</p>
                        <div className="divide-y">
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">کاردانی</label>
                            </div>
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">کارشناسی</label>
                            </div>
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">کارشناسی ارشد</label>
                            </div>
                            <div className="px-4 py-2">
                                <input type="checkbox" />
                                <label htmlFor="" className="text-secondary font-medium mr-2">دکترا</label>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="col-span-9">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white border border-[#9D9D9D] rounded-xl">
                            <Link to={`/product/raect`}>
                                <img 
                                    src="/Images/slider-book.png"
                                    className="m-auto"
                                    alt="book" />
                                <div className="px-4">
                                    <p className="text-primary font-bold text-xl">مدیریت منابع انسانی پیشرفته</p>
                                </div>
                            </Link>
                            <div className="space-y-3 p-4">
                                <div className="flex items-center gap-x-4">
                                    <FiUserCheck className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">دکتر رضا رسولی - دکتر علی صالحی</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <FiBook className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">انتشارات دانشگاه پیام نور</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <BiDollar className="text-primary" size={16}/>
                                    <p className="font-medium text-secondary">10000 تومان</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-[#9D9D9D] rounded-xl">
                            <Link to={`/product/raect`}>
                                <img 
                                    src="/Images/slider-book.png"
                                    className="m-auto"
                                    alt="book" />
                                <div className="px-4">
                                    <p className="text-primary font-bold text-xl">مدیریت منابع انسانی پیشرفته</p>
                                </div>
                            </Link>
                            <div className="space-y-3 p-4">
                                <div className="flex items-center gap-x-4">
                                    <FiUserCheck className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">دکتر رضا رسولی - دکتر علی صالحی</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <FiBook className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">انتشارات دانشگاه پیام نور</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <BiDollar className="text-primary" size={16}/>
                                    <p className="font-medium text-secondary">10000 تومان</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-[#9D9D9D] rounded-xl">
                            <Link to={`/product/raect`}>
                                <img 
                                    src="/Images/slider-book.png"
                                    className="m-auto"
                                    alt="book" />
                                <div className="px-4">
                                    <p className="text-primary font-bold text-xl">مدیریت منابع انسانی پیشرفته</p>
                                </div>
                            </Link>
                            <div className="space-y-3 p-4">
                                <div className="flex items-center gap-x-4">
                                    <FiUserCheck className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">دکتر رضا رسولی - دکتر علی صالحی</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <FiBook className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">انتشارات دانشگاه پیام نور</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <BiDollar className="text-primary" size={16}/>
                                    <p className="font-medium text-secondary">10000 تومان</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-[#9D9D9D] rounded-xl">
                            <Link to={`/product/raect`}>
                                <img 
                                    src="/Images/slider-book.png"
                                    className="m-auto"
                                    alt="book" />
                                <div className="px-4">
                                    <p className="text-primary font-bold text-xl">مدیریت منابع انسانی پیشرفته</p>
                                </div>
                            </Link>
                            <div className="space-y-3 p-4">
                                <div className="flex items-center gap-x-4">
                                    <FiUserCheck className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">دکتر رضا رسولی - دکتر علی صالحی</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <FiBook className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">انتشارات دانشگاه پیام نور</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <BiDollar className="text-primary" size={16}/>
                                    <p className="font-medium text-secondary">10000 تومان</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-[#9D9D9D] rounded-xl">
                            <Link to={`/product/raect`}>
                                <img 
                                    src="/Images/slider-book.png"
                                    className="m-auto"
                                    alt="book" />
                                <div className="px-4">
                                    <p className="text-primary font-bold text-xl">مدیریت منابع انسانی پیشرفته</p>
                                </div>
                            </Link>
                            <div className="space-y-3 p-4">
                                <div className="flex items-center gap-x-4">
                                    <FiUserCheck className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">دکتر رضا رسولی - دکتر علی صالحی</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <FiBook className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">انتشارات دانشگاه پیام نور</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <BiDollar className="text-primary" size={16}/>
                                    <p className="font-medium text-secondary">10000 تومان</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-[#9D9D9D] rounded-xl">
                            <Link to={`/product/raect`}>
                                <img 
                                    src="/Images/slider-book.png"
                                    className="m-auto"
                                    alt="book" />
                                <div className="px-4">
                                    <p className="text-primary font-bold text-xl">مدیریت منابع انسانی پیشرفته</p>
                                </div>
                            </Link>
                            <div className="space-y-3 p-4">
                                <div className="flex items-center gap-x-4">
                                    <FiUserCheck className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">دکتر رضا رسولی - دکتر علی صالحی</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <FiBook className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">انتشارات دانشگاه پیام نور</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <BiDollar className="text-primary" size={16}/>
                                    <p className="font-medium text-secondary">10000 تومان</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-[#9D9D9D] rounded-xl">
                            <Link to={`/product/raect`}>
                                <img 
                                    src="/Images/slider-book.png"
                                    className="m-auto"
                                    alt="book" />
                                <div className="px-4">
                                    <p className="text-primary font-bold text-xl">مدیریت منابع انسانی پیشرفته</p>
                                </div>
                            </Link>
                            <div className="space-y-3 p-4">
                                <div className="flex items-center gap-x-4">
                                    <FiUserCheck className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">دکتر رضا رسولی - دکتر علی صالحی</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <FiBook className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">انتشارات دانشگاه پیام نور</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <BiDollar className="text-primary" size={16}/>
                                    <p className="font-medium text-secondary">10000 تومان</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-[#9D9D9D] rounded-xl">
                            <Link to={`/product/raect`}>
                                <img 
                                    src="/Images/slider-book.png"
                                    className="m-auto"
                                    alt="book" />
                                <div className="px-4">
                                    <p className="text-primary font-bold text-xl">مدیریت منابع انسانی پیشرفته</p>
                                </div>
                            </Link>
                            <div className="space-y-3 p-4">
                                <div className="flex items-center gap-x-4">
                                    <FiUserCheck className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">دکتر رضا رسولی - دکتر علی صالحی</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <FiBook className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">انتشارات دانشگاه پیام نور</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <BiDollar className="text-primary" size={16}/>
                                    <p className="font-medium text-secondary">10000 تومان</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-[#9D9D9D] rounded-xl">
                            <Link to={`/product/raect`}>
                                <img 
                                    src="/Images/slider-book.png"
                                    className="m-auto"
                                    alt="book" />
                                <div className="px-4">
                                    <p className="text-primary font-bold text-xl">مدیریت منابع انسانی پیشرفته</p>
                                </div>
                            </Link>
                            <div className="space-y-3 p-4">
                                <div className="flex items-center gap-x-4">
                                    <FiUserCheck className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">دکتر رضا رسولی - دکتر علی صالحی</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <FiBook className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">انتشارات دانشگاه پیام نور</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <BiDollar className="text-primary" size={16}/>
                                    <p className="font-medium text-secondary">10000 تومان</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-[#9D9D9D] rounded-xl">
                            <Link to={`/product/raect`}>
                                <img 
                                    src="/Images/slider-book.png"
                                    className="m-auto"
                                    alt="book" />
                                <div className="px-4">
                                    <p className="text-primary font-bold text-xl">مدیریت منابع انسانی پیشرفته</p>
                                </div>
                            </Link>
                            <div className="space-y-3 p-4">
                                <div className="flex items-center gap-x-4">
                                    <FiUserCheck className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">دکتر رضا رسولی - دکتر علی صالحی</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <FiBook className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">انتشارات دانشگاه پیام نور</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <BiDollar className="text-primary" size={16}/>
                                    <p className="font-medium text-secondary">10000 تومان</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-[#9D9D9D] rounded-xl">
                            <Link to={`/product/raect`}>
                                <img 
                                    src="/Images/slider-book.png"
                                    className="m-auto"
                                    alt="book" />
                                <div className="px-4">
                                    <p className="text-primary font-bold text-xl">مدیریت منابع انسانی پیشرفته</p>
                                </div>
                            </Link>
                            <div className="space-y-3 p-4">
                                <div className="flex items-center gap-x-4">
                                    <FiUserCheck className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">دکتر رضا رسولی - دکتر علی صالحی</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <FiBook className="text-primary" size={16}/>
                                    <p className="text-sm text-secondary">انتشارات دانشگاه پیام نور</p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <BiDollar className="text-primary" size={16}/>
                                    <p className="font-medium text-secondary">10000 تومان</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-8">
                        <div className="flex items-center justify-center gap-x-4">
                            <button className="bg-primary-900 text-white p-4 px-6 rounded-xl text-lg">1</button>
                            <button className="bg-secondary-500 text-secondary text-lg p-4 px-6 rounded-xl">2</button>
                            <button className="bg-secondary-500 text-secondary text-lg p-4 px-6 rounded-xl">3</button>
                            <button className="bg-secondary-500 text-secondary text-lg p-4 px-6 rounded-xl">4</button>
                            <button className="bg-secondary-500 text-secondary text-lg p-4 px-6 rounded-xl">...</button>
                        </div>
                    </div>
                </div>
            </div>
            <Ads/>
        </div>
    )
}

export default Products