import { Link } from "react-router-dom";
import { GoInfo } from "react-icons/go";
import { FiBook, FiCalendar, FiDownload, FiUserCheck } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { Ads } from "@/Common";

const Product = () => {
    return (
        <div className="container m-auto max-w-screen-xl">
            <div className="grid grid-cols-12 gap-4 my-10">
                <div className="col-span-4">
                    <div className="border border-secondary rounded-3xl h-full flex items-center justify-center">
                        <img src="/Images/slider-book.png" className="m-auto" alt="" />
                    </div>
                </div>
                <div className="col-span-8 space-y-4">
                    <div className="border border-secondary rounded-3xl p-6 space-y-5">
                        <div className="flex justify-between border-b border-dashed border-gray-300 pb-4">
                            <div className="space-y-4">
                                <h1 className="text-2xl font-extrabold text-primary">مدیریت منابع انسانی پیشرفته</h1>
                                <p className="text-lg text-secondary font-bold">کد درس: ۱۲۲۳۲۵۲</p>
                            </div>
                            <div>
                                <button className="flex items-center bg-primary-800 gap-x-2 font-bold text-white py-3 px-5 rounded-2xl">
                                    <FiDownload className="text-white" size={22}/>
                                    دریافت فوری فایل
                                </button>
                            </div>
                        </div>
                        <div>
                            <ul className="flex items-center gap-x-6">
                                <li className="flex items-center gap-x-4 text-secondary font-medium text-sm">
                                    <div className="border-2 border-primary p-2 rounded-3xl">
                                        <FiUserCheck className="text-primary" size={22}/>
                                    </div>
                                    دکتر رضا رسولی - دکتر علی صالحی
                                </li>
                                <li className="flex items-center gap-x-4 text-secondary font-medium text-sm">
                                    <div className="border-2 border-primary p-2 rounded-3xl">
                                        <FiBook className="text-primary" size={22}/>
                                    </div>
                                    انتشارات دانشگاه پیام نور
                                </li>
                                <li className="flex items-center gap-x-4 text-secondary font-medium text-sm">
                                    <div className="border-2 border-primary p-2 rounded-3xl">
                                        <FiCalendar className="text-primary" size={22}/>
                                    </div>
                                    سال انتشار 1400
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border border-secondary bg-secondary-300 rounded-3xl p-5">
                        <div className="flex gap-x-4">
                            <GoInfo className="text-secondary" size={40}/>
                            <p className="text-base font-medium text-secondary">دریافت فایل فقط در صورت داشتن اشتراک امکان پذیر است. در صورتی که هنوز اشتراک خود را تهیه نکرده اید می توانید همین حالا اقدام نمایید.</p>
                        </div>
                        <div className="flex items-center justify-end">
                            <button className="text-white bg-secondary-800 p-2 px-5 rounded-2xl">خرید اشتراک</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-12 space-y-4">
                <h3 className="text-primary font-extrabold text-2xl">درباره محصول</h3>
                <p className="text-secondary font-medium text-base leading-8 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از 
                    طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                     مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته 
                    حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                     علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و 
                    دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، 
                    و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید 
                    سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و 
                    سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                     کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با 
                    نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                     در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان 
                    مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </div>
            <div className="space-y-10 mb-10">
                <div className="flex items-center gap-x-5">
                    <img src="/Images/icon_lasted.png" alt="" />
                    <h5 className="text-primary font-black text-2xl">محصولات مرتبط</h5>
                </div>
                <div className="grid grid-cols-4 gap-6">
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
            </div>
            <Ads/>
        </div>
    )
}

export default Product