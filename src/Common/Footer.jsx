import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin, FiPhoneCall, FiTwitter } from "react-icons/fi";
import { SiAparat } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="m-auto max-w-screen-xl py-8">
            <div className="grid grid-cols-3 gap-x-8">
                <div className="space-y-5">
                    <img src="/Images/Logo.png" className="w-60 h-14 object-cover" alt="" />
                    <p className="text-secondary text-justify leading-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
                    <div className="flex items-center justify-around">
                        <div className="ring-1 ring-secondary p-4 px-6 rounded-3xl">
                            <img 
                                src="/Images/zarin-palpng.parspng 1.png"
                                className="aspect-w-16 aspect-h-9 pb-0"
                                alt="" />
                        </div>
                        <div className="ring-1 ring-secondary p-6 rounded-3xl">
                            <img 
                                src="/Images/enmad_logo.png"
                                className="aspect-w-16 aspect-h-9 pb-0"
                                alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 col-span-2">
                    <div className="space-y-10">
                        <p className="text-2xl font-bold text-secondary">راهنمای سلام دانشگاه</p>
                        <ul className="space-y-4 text-secondary font-medium">
                            <li>سوالات متداول</li>
                            <li>قوانین سلام دانشگاه</li>
                            <li>مستندات فنی</li>
                            <li>اپلیکیشن اندروید</li>
                            <li>اپلیکیشن آی او اس</li>
                        </ul>
                    </div>
                    <div className="space-y-10">
                        <p className="text-2xl font-bold text-secondary">خدمات مشتریان</p>
                        <ul className="space-y-4 text-secondary font-medium">
                            <li>خرید کتاب</li>
                            <li>خرید جزوات</li>
                            <li>منابع دانشگاهی</li>
                            <li>دانلود نمونه سوالات</li>
                            <li>خلاصه کتب دانشگاهی</li>
                        </ul>
                    </div>
                    <div className="space-y-10">
                        <p className="text-2xl font-bold text-secondary">تماس با ما</p>
                        <ul className="space-y-4 text-secondary font-medium">
                            <li className="flex items-center text-secondary gap-x-4">
                                <AiOutlineMail size={22}/>
                                info@hiuni.com
                            </li>
                            <li className="flex items-center text-secondary gap-x-4">
                                <FiPhoneCall size={22}/>
                                989218995829+
                            </li>
                            <li className="text-sm">
                                تنها در روزهای کاری از ساعت ۱۰ تا ۵ بعد از ظهر
                            </li>
                            <li>شبکه های اجتماعی</li>
                            <ul className="flex items-center gap-x-6">
                                <li className="ring-1 ring-secondary p-3 rounded-full">
                                    <BsInstagram className="text-secondary" size={22}/>
                                </li>
                                <li className="ring-1 ring-secondary p-3 rounded-full">
                                    <FiLinkedin className="text-secondary" size={22}/>
                                </li>
                                <li className="ring-1 ring-secondary p-3 rounded-full">
                                    <FiTwitter className="text-secondary" size={22}/>
                                </li>
                                <li className="ring-1 ring-secondary p-3 rounded-full">
                                    <SiAparat className="text-secondary" size={22}/>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border border-secondary border-dashed my-8"></div>
            <p className="text-center text-secondary">© کلیه حقوق این وب‌سایت متعلق به سلام دانشگاه می‌باشد.</p>
        </footer>
    )
}

export default Footer