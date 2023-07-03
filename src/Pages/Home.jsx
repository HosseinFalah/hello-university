// Import Swiper React components
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FiArrowLeft, FiArrowRight, FiBook, FiShoppingBag, FiUserCheck } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { BiDollar } from "react-icons/bi";

import { sliderItem } from "../Constants/sliderItem";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowLeftCircle } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";

const Home = () => {
    return (
        <main className="container m-auto">
            <div className="m-auto max-w-screen-xl">
                <div className="grid grid-rows-2 grid-flow-col gap-4 py-8">
                    <div className="row-span-3 col-span-2">
                        <img 
                            src="/Images/main_banner.png" 
                            className="max-w-full h-full object-cover rounded-3xl"
                            alt="اپلیکیشن سلام دانشگاه" />
                    </div>
                    <div className="col-span-1">
                        <img 
                            src="/Images/main_banner-1.png"
                            className="w-full h-full"
                            alt="فروش کتاب دانشگاهی" />
                    </div>
                    <div className="row-span-2 col-span-1">
                        <img 
                            src="/Images/main_banner-2.png"
                            className="w-full h-full"
                            alt="فروش جزوه های دانشگاهی" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-x-4 max-w-screen-lg m-auto bg-white p-4 py-8 rounded-3xl border-dotted border-2 text-center">
                    <div className="">
                        <p className="text-4xl text-primary font-semibold">کاردانی</p>
                        <span className="text-secondary text-sm font-medium pt-5 block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</span>
                    </div>
                    <div className="border-x-2 pl-2">
                        <p className="text-4xl text-primary font-semibold">کارشناسی</p>
                        <span className="text-secondary text-sm font-medium pt-5 block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</span>
                    </div>
                    <div className="border-l-2 pl-2">
                        <p className="text-4xl text-primary font-semibold">کارشناسی ارشد</p>
                        <span className="text-secondary text-sm font-medium pt-5 block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</span>
                    </div>
                    <div className="">
                        <p className="text-4xl text-primary font-semibold">دکترا</p>
                        <span className="text-secondary text-sm font-medium pt-5 block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</span>
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
            </div>
            <div className="py-5 bg-primary-900">
                <div className="border border-white border-dashed"></div>
                <div className="flex items-center">
                    <img
                        src="/Images/banner_offer.png"
                        className="aspect-w-10 w-96 object-cover"
                        alt="offer" />
                    <div className="w-full overflow-hidden">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={15}
                            modules={[Autoplay, Navigation]}
                            autoplay={{ delay: 3000 }}
                            pagination={{
                                clickable: true,
                            }}
                            className="overflow-hidden mySwiper"
                        >
                            {sliderItem && sliderItem.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className="bg-white rounded-xl">
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
                                            <button className="bg-primary-900 text-white py-2.5 text-sm px-4 flex items-center rounded-xl gap-x-2">
                                                <FiShoppingBag size={22}/>
                                                افزودن به سبد خرید
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="border border-white border-dashed"></div>
            </div>
            <div className="py-8 m-auto max-w-screen-xl space-y-16">
                <div className="grid grid-cols-2 gap-x-6">
                    <div>
                        <img 
                            src="/Images/banner_1.png"
                            className="w-full h-full"
                            alt="" />
                    </div>
                    <div>
                        <img 
                            src="/Images/banner_2.png"
                            className="w-full h-full"
                            alt="" />
                    </div>
                </div>
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
                            <h4 className="text-3xl font-semibold text-primary">جدیدترین نمونه سوالات</h4>
                        </div>
                        <button className="flex items-center gap-2 p-2 border border-secondary rounded-lg text-secondary">
                            مشاهده همه محصولات
                            <IoIosArrowBack/>
                        </button>
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
                    <div className="flex items-center justify-evenly bg-gradient-to-r from-purple-700 to-orange-500 rounded-3xl py-16">
                        <img src="/Images/instagram_banner.png" className="absolute right-0" alt="صفحه اینستاگرام" />
                        <p className="text-white text-3xl text-center font-semibold">صفحه اینستاگرام سلام دانشگاه را دنبال کنید</p>
                        <button className="flex items-center text-white ring ring-white rounded-xl p-2 px-3 gap-x-4">
                            دنبال کردن صفحه ما
                            <BsArrowLeftCircle size={22}/>
                        </button>
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
            <div className="py-5 bg-primary-900">
                <div className="m-auto max-w-screen-xl">    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-4">
                            <img src="/Images/icon_lasted.png" alt="" />
                            <h4 className="text-3xl font-semibold text-white">جدیدترین انتشارات</h4>
                        </div>
                        <button className="flex items-center gap-2 p-2 border border-white rounded-lg text-white">
                            مشاهده همه محصولات
                            <IoIosArrowBack/>
                        </button>
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
            </div>
            <div className="my-5 max-w-screen-xl m-auto">
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
                <div className="bg-primary-900 py-5 rounded-3xl flex items-center justify-around my-10">
                    <div className="flex items-center gap-x-4">
                        <div className="bg-white rounded-2xl">
                            <img src="/Images/Main_Logo_2.png" alt="" />
                        </div>
                        <p className="text-white text-2xl font-bold">دانلود اپلیکیشن سلام دانشگاه</p>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <div>
                            <img src="/Images/download_icon.png" alt="" />
                        </div>
                        <div>
                            <img src="/Images/download_icon_2.png" alt="" />
                        </div>
                        <div>
                            <img src="/Images/download_icon_3.png" alt="" />
                        </div>
                        <div>
                            <img src="/Images/download_icon_4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home