// Import Swiper React components
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { FiArrowLeft, FiArrowRight, FiBook, FiShoppingBag, FiUserCheck } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { BiDollar } from "react-icons/bi";
import { BsArrowLeftCircle } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { LuCheckCircle } from "react-icons/lu";

import { sliderItem } from "@/Constants/sliderItem";
import { Ads } from "@/Common";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
    return (
        <div>
            <div className="grid grid-cols-2 place-items-start bg-secondary-500 rounded-3xl main--banner">        
                <div className="max-w-xl">
                    <img src="/Images/main_banner.png" className="w-full h-full object-cover" alt="بنر" />
                </div>
                <div className="flex flex-col justify-around h-full">
                    <div className="space-y-7">
                        <p className="text-3xl text-secondary font-bold">دسترسی بی نهایت...</p>
                        <h1 className="text-6xl text-primary font-bold">به کلــی منابــع آموزشـــی</h1>
                        <p className="text-4xl text-primary font-bold">سلام دانشگاه ، دانشگاهی در جیب تو :)</p>
                        <button className="bg-primary-900 text-white py-2.5 px-4 rounded-xl flex items-center gap-x-2">
                            <FiShoppingBag size={22}/>
                            خریـــد اشتـراک ســلام دانــشگاه
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-y-8">
                        <div className="flex items-center gap-x-2">
                            <LuCheckCircle size={25} className="text-white"/>
                            <p className="text-2xl text-white font-black">کــــــــاردانـــــــــــــــی</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <LuCheckCircle size={25} className="text-white"/>
                            <p className="text-3xl text-white font-black">کارشـناســـــــی</p>
                        </div>
                     
                        <div className="flex items-center gap-x-2">
                            <LuCheckCircle size={25} className="text-white"/>
                            <p className="text-3xl text-white font-black">کارشناسی ارشد</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <LuCheckCircle size={25} className="text-white"/>
                            <p className="text-2xl text-white font-black">دکـــــــــتــــــــــــــرا</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-auto relative my-8">
                <div className="flex items-end justify-center gap-x-4">
                    <img src="/Images/logo-popular.png" alt="" />
                    <h2 className="text-primary font-semibold text-4xl">دانشگاه های محبوب</h2>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev'
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="my-10 p-5 py-10 border rounded-3xl bg-white mySwiper"
                >
                    {sliderItem && 
                        sliderItem.map(item => (
                            <SwiperSlide key={item.id}>
                                <img 
                                    src={item.img} 
                                    className="aspect-w-16 aspect-h-9 pb-0"
                                    alt={item.title} />
                            </SwiperSlide>
                        ))}
                    <button className="button-prev absolute top-0 -right-6 z-30 bg-white p-2 rounded-full border border-gray-400 translate-y-64">
                        <FiArrowRight
                            className="text-secondary"
                            size={25}/>
                    </button>
                    <button className="button-next absolute top-0 -left-6 z-30 bg-white p-2 rounded-full border border-gray-400 translate-y-64">
                        <FiArrowLeft
                            className="text-secondary"
                            size={25}/>
                    </button>
                </Swiper>
            </div>
            <div className="py-5 pb-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <img src="/Images/icon_lasted.png" alt="" />
                        <h4 className="text-3xl font-semibold text-primary">جدیدترین کتاب ها</h4>
                    </div>
                    <Link to={`/products`} className="flex items-center gap-2 p-2 border border-secondary rounded-lg text-secondary">
                        مشاهده همه محصولات
                        <IoIosArrowBack/>
                    </Link>
                </div>
                <div className="relative">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        navigation={{
                            nextEl: '.button-next',
                            prevEl: '.button-prev'
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        className="my-10 mySwiper"
                    >
                        {sliderItem && 
                            sliderItem.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className="bg-white border border-[#9D9D9D] rounded-xl">
                                        <img 
                                            src="/Images/slider-book.png"
                                            alt="book" />
                                        <p className="text-primary font-bold text-center text-xl">مدیریت منابع انسانی پیشرفته</p>
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
                                        <div className="flex items-center justify-center py-4">
                                            <button className="bg-primary-900 text-white py-2.5 px-4 text-sm flex items-center rounded-xl gap-x-2">
                                                <FiShoppingBag size={22}/>
                                                افزودن به سبد خرید
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        <button className="button-prev absolute top-0 -right-6 z-30 bg-white p-2 rounded-full border border-gray-400 translate-y-56">
                            <FiArrowRight
                                className="text-secondary"
                                size={25}/>
                        </button>
                        <button className="button-next absolute top-0 -left-6 z-30 bg-white p-2 rounded-full border border-gray-400 translate-y-56">
                            <FiArrowLeft
                                className="text-secondary"
                                size={25}/>
                        </button>
                    </Swiper>
                </div>
            </div>
            {/* <div className="">
                <div className="flex items-end justify-center gap-x-4">
                    <img src="/Images/logo-popular.png" alt="" />
                    <h2 className="text-primary font-semibold text-4xl">اشتراک های ویژه</h2>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div> */}
            <div className="py-8 space-y-16">
                <div className="grid grid-cols-2 gap-x-6">
                    <div className="grid grid-cols-2 place-items-center gap-10">
                        <div className="ring-1 ring-secondary shadow-md rounded-3xl p-6 bg-white">
                            <img 
                                src="/Images/icons8-book-and-pencil-100 1.png"
                                className="aspect-w-5 m-auto"
                                alt="" />
                            <p className="text-primary font-bold text-2xl text-center">قیمت مناسب</p>
                            <span className="text-secondary text-justify text-sm block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</span>
                        </div>
                        <div className="ring-1 ring-secondary shadow-md rounded-3xl p-6 bg-white">
                            <img 
                                src="/Images/icons8-iphone-se-100 1.png"
                                className="aspect-w-5 m-auto"
                                alt="" />
                            <p className="text-primary font-bold text-2xl text-center">قیمت مناسب</p>
                            <span className="text-secondary text-justify text-sm block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</span>
                        </div>
                        <div className="ring-1 ring-secondary shadow-md rounded-3xl p-6 bg-white">
                            <img 
                                src="/Images/icons8-pdf-100 1.png"
                                className="aspect-w-5 m-auto"
                                alt="" />
                            <p className="text-primary font-bold text-2xl text-center">قیمت مناسب</p>
                            <span className="text-secondary text-justify text-sm block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</span>
                        </div>
                        <div className="ring-1 ring-secondary shadow-md rounded-3xl p-6 bg-white">
                            <img 
                                src="/Images/icons8-student-male-100 1.png"
                                className="aspect-w-5 m-auto"
                                alt="" />
                            <p className="text-primary font-bold text-2xl text-center">قیمت مناسب</p>
                            <span className="text-secondary text-justify text-sm block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</span>
                        </div>
                    </div>
                    <div>
                        <img 
                            src="/Images/banner_3.png"
                            alt="" />
                    </div>
                </div>
                <div className="py-5 pb-20">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-4">
                            <img src="/Images/icon_lasted.png" alt="" />
                            <h4 className="text-3xl font-semibold text-primary">جدیدترین جزوات</h4>
                        </div>
                        <Link to={`/products`} className="flex items-center gap-2 p-2 border border-secondary rounded-lg text-secondary">
                            مشاهده همه محصولات
                            <IoIosArrowBack/>
                        </Link>
                    </div>
                    <div className="relative">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={10}
                            navigation={{
                                nextEl: '.button-next',
                                prevEl: '.button-prev'
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Navigation]}
                            className="my-10 mySwiper"
                        >
                            {sliderItem && 
                                sliderItem.map(item => (
                                    <SwiperSlide key={item.id}>
                                        <div className="bg-white border border-[#9D9D9D] rounded-xl">
                                            <img 
                                                src="/Images/slider-book.png"
                                                alt="book" />
                                            <p className="text-primary font-bold text-center text-xl">مدیریت منابع انسانی پیشرفته</p>
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
                                            <div className="flex items-center justify-center py-4">
                                                <button className="bg-primary-900 text-white py-2.5 px-4 text-sm flex items-center rounded-xl gap-x-2">
                                                    <FiShoppingBag size={22}/>
                                                    افزودن به سبد خرید
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            <button className="button-prev absolute top-0 -right-6 z-30 bg-white p-2 rounded-full border border-gray-400 translate-y-56">
                                <FiArrowRight
                                    className="text-secondary"
                                    size={25}/>
                            </button>
                            <button className="button-next absolute top-0 -left-6 z-30 bg-white p-2 rounded-full border border-gray-400 translate-y-56">
                                <FiArrowLeft
                                    className="text-secondary"
                                    size={25}/>
                            </button>
                        </Swiper>
                    </div>
                </div>
                <div className="grid grid-cols-2 place-items-center gap-x-8">
                    <div>
                        <img src="/Images/banner_4.png" alt="" />
                    </div>
                    <div className="ring-1 ring-secondary rounded-3xl space-y-6 py-10 px-14 max-w-lg bg-white shadow-md">
                        <p className="text-3xl font-extrabold text-primary text-center">اپلیکیــشن ســلام دانشــگاه</p>
                        <p className="text-secondary text-justify leading-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
                        <div className="flex items-center justify-center">
                            <button className="flex items-center bg-primary-900 text-white py-2.5 px-4 rounded-xl gap-x-2">
                                <HiOutlineDownload size={22}/>
                                دانلود اپلیکیشن
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 pb-20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <img src="/Images/icon_lasted.png" alt="" />
                        <h4 className="text-3xl font-semibold text-primary">جدیدترین نمونه سوالات</h4>
                    </div>
                    <Link to={`/products`} className="flex items-center gap-2 p-2 border border-secondary rounded-lg text-secondary">
                        مشاهده همه محصولات
                        <IoIosArrowBack/>
                    </Link>
                </div>
                <div className="relative">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        navigation={{
                            nextEl: '.button-next',
                            prevEl: '.button-prev'
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        className="my-10 mySwiper"
                    >
                        {sliderItem && 
                            sliderItem.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className="bg-white border border-[#9D9D9D] rounded-xl">
                                        <img 
                                            src="/Images/slider-book.png"
                                            alt="book" />
                                        <p className="text-primary font-bold text-center text-xl">مدیریت منابع انسانی پیشرفته</p>
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
                                        <div className="flex items-center justify-center py-4">
                                            <button className="bg-primary-900 text-white py-2.5 px-4 text-sm flex items-center rounded-xl gap-x-2">
                                                <FiShoppingBag size={22}/>
                                                افزودن به سبد خرید
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        <button className="button-prev absolute top-0 -right-6 z-30 bg-white p-2 rounded-full border border-gray-400 translate-y-56">
                            <FiArrowRight
                                className="text-secondary"
                                size={25}/>
                        </button>
                        <button className="button-next absolute top-0 -left-6 z-30 bg-white p-2 rounded-full border border-gray-400 translate-y-56">
                            <FiArrowLeft
                                className="text-secondary"
                                size={25}/>
                        </button>
                    </Swiper>
                </div>
            </div>
            <div className="relative">
                <div className="grid grid-cols-2 bg-gradient-to-r from-purple-700 to-orange-500 rounded-3xl py-16">
                    <div className="col-span-1 absolute -top-16 right-0">
                        <img src="/Images/instagram_banner.png" alt="صفحه اینستاگرام" />
                    </div>
                    <div className="col-span-2 flex items-center justify-evenly mr-[15rem]">
                        <p className="text-white text-3xl text-center font-semibold">صفحه اینستاگرام سلام دانشگاه را دنبال کنید</p>
                        <button className="flex items-center text-white ring ring-white rounded-xl p-2 px-3 gap-x-4">
                            دنبال کردن صفحه ما
                            <BsArrowLeftCircle size={22}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <div className="flex items-end justify-center gap-x-4 pb-8">
                    <img src="/Images/icon_question.png" alt="" />
                    <p className="text-3xl text-primary font-bold">سوالات متداول</p>
                </div>
                <div className="space-y-5 my-5 pb-10">
                    <div className="p-5 rounded-xl ring-1 ring-primary bg-primary-100 flex items-center gap-x-2 cursor-pointer">
                        <IoIosArrowBack className="text-secondary"/>
                        <p className="text-secondary text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl ring-1 ring-gray-400 flex items-center gap-x-2 cursor-pointer">
                        <IoIosArrowBack className="text-secondary"/>
                        <p className="text-secondary text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl ring-1 ring-gray-400 flex items-center gap-x-2 cursor-pointer">
                        <IoIosArrowBack className="text-secondary"/>
                        <p className="text-secondary text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl ring-1 ring-gray-400 flex items-center gap-x-2 cursor-pointer">
                        <IoIosArrowBack className="text-secondary"/>
                        <p className="text-secondary text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟</p>
                    </div>
                </div>
                <Ads/>
            </div>
        </div>
    )
}

export default Home