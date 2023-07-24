import { FiDownload } from "react-icons/fi"

const Auth = () => {
    return (
        <div className="min-h-screen space-y-8">
            <div className="flex items-center justify-center">    
                <img 
                    src="/Images/Logo.png" 
                        className="aspect-w-16 w-56 h-20 object-cover"
                        alt="Logo" />
            </div>
            <div className="container m-auto bg-secondary-300 max-w-md rounded-2xl">
                <form className="max-w-xs m-auto flex flex-col items-center py-8 space-y-8" autoComplete="off">
                    <p className="text-secondary text-3xl font-bold">ورود</p>
                    <div className="space-y-8">
                        <div className="flex flex-col space-y-8">
                            <label 
                                htmlFor="phoneNumber" 
                                className="text-secondary text-lg font-bold">
                                    شماره تلفن همراه خود را وارد نمایید.
                            </label>
                            <input 
                                type="text" 
                                id="phoneNumber" 
                                name="phoneNumber"
                                dir="ltr"
                                className="outline-none py-4 p-3 rounded-xl w-full"
                                placeholder="09111234567" />
                        </div>
                        <button className="bg-secondary-800 text-white font-bold text-lg p-4 rounded-xl w-full">ورود / ثبت نام</button>
                    </div>
                </form>
            </div>
            <div className="fixed bottom-0 left-0 right-0">
                <div className="w-full flex items-center justify-between bg-primary-900 p-4">
                    <ul className="flex items-center gap-x-10 text-white">
                        <li className="text-lg">سوالات متداول</li>
                        <li className="text-lg">تماس با ما</li>
                        <li className="text-lg">قوانین و مقررات</li>
                        <li className="text-lg">شبکه های اجتماعی</li>
                    </ul>
                    <button className="text-white bg-primary-800 p-4 px-6 rounded-3xl font-medium flex items-center gap-4">
                        <FiDownload className="text-white" size={22}/>
                        دانلود اپلیکیشن
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth