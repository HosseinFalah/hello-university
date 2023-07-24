import { BsInstagram } from "react-icons/bs"
import { FiLinkedin, FiTwitter } from "react-icons/fi"
import { Ads } from "@/Common"

const About = () => {
    return (
        <div>
            <div className="max-w-xl m-auto">
                <img 
                    src="/Images/Logo-about.png" 
                    className="w-full h-full object-cover" 
                    alt="لگوی" />
            </div>
            <div className="space-y-6">
                <h2 className="font-black text-primary text-3xl">درباره تیم ما</h2>
                <p className="font-medium text-justify text-base text-secondary leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                     و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای 
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
                     تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                     ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد
                     و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده 
                    قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون 
                    بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                     ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
                     تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                     در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان 
                    مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </div>

            <div className="my-20">
                <div className="flex items-center justify-center gap-x-4">
                    <img src="/Images/icon_user.png" alt="teme-logo" />
                    <p className="text-2xl font-black text-primary">معرفی اعضای تیم تولید</p>
                </div>
                <div className="grid grid-cols-4">
                    <div>
                        <img src="/Images/teme-1.png" alt="" />
                        <div className="text-center space-y-4">
                            <h5 className="font-black text-2xl text-primary">امیررضا جلوس حقی</h5>
                            <p className="text-base font-medium text-secondary">برنامه نویس فلاتر (موبایل)</p>
                            <ul className="flex items-center justify-center gap-x-4">
                                <li className="ring-1 ring-primary p-2 rounded-full cursor-pointer">
                                    <BsInstagram className="text-primary" size={20}/>
                                </li>
                                <li className="ring-1 ring-primary p-2 rounded-full cursor-pointer">
                                    <FiLinkedin className="text-primary" size={20}/>
                                </li>
                                <li className="ring-1 ring-primary p-2 rounded-full cursor-pointer">
                                    <FiTwitter className="text-primary" size={20}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src="/Images/teme-2.png" alt="" />
                        <div className="text-center space-y-4">
                            <h5 className="font-black text-2xl text-primary">محمد دهقانی فرد</h5>
                            <p className="text-base font-medium text-secondary">برنامه نویس فلاتر (موبایل)</p>
                            <ul className="flex items-center justify-center gap-x-4">
                                <li className="ring-1 ring-primary p-2 rounded-full cursor-pointer">
                                    <BsInstagram className="text-primary" size={20}/>
                                </li>
                                <li className="ring-1 ring-primary p-2 rounded-full cursor-pointer">
                                    <FiLinkedin className="text-primary" size={20}/>
                                </li>
                                <li className="ring-1 ring-primary p-2 rounded-full cursor-pointer">
                                    <FiTwitter className="text-primary" size={20}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src="/Images/teme-3.png" alt="" />
                        <div className="text-center space-y-4">
                            <h5 className="font-black text-2xl text-primary">حسین فلاح</h5>
                            <p className="text-base font-medium text-secondary">برنامه نویس فرانت اند</p>
                            <ul className="flex items-center justify-center gap-x-4">
                                <li className="ring-1 ring-primary p-2 rounded-full cursor-pointer">
                                    <BsInstagram className="text-primary" size={20}/>
                                </li>
                                <li className="ring-1 ring-primary p-2 rounded-full cursor-pointer">
                                    <FiLinkedin className="text-primary" size={20}/>
                                </li>
                                <li className="ring-1 ring-primary p-2 rounded-full cursor-pointer">
                                    <FiTwitter className="text-primary" size={20}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src="/Images/teme-4.png" alt="" />
                        <div className="text-center space-y-4">
                            <h5 className="font-black text-2xl text-primary">علیرضا عسکر پور</h5>
                            <p className="text-base font-medium text-secondary">برنامه نویس بک اند</p>
                            <ul className="flex items-center justify-center gap-x-4">
                                <li className="ring-1 ring-primary p-2 rounded-full cursor-pointer">
                                    <BsInstagram className="text-primary" size={20}/>
                                </li>
                                <li className="ring-1 ring-primary p-2 rounded-full cursor-pointer">
                                    <FiLinkedin className="text-primary" size={20}/>
                                </li>
                                <li className="ring-1 ring-primary p-2 rounded-full cursor-pointer">
                                    <FiTwitter className="text-primary" size={20}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Ads/>
        </div>
    )
}

export default About