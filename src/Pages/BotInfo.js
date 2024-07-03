import React, { useEffect, useState } from "react";
import { ShopNameLengthIndicator , shopNameLength } from "../Components/InputLengthCounter"

import { Link } from "react-router-dom";

export const BotInfo = () => {
    const [shopName, setShopName] = useState('');
    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [shopNameLength, setShopNameLength] = useState(0);

    useEffect(() => {
        const isShopNameValid = shopName.length > 4 && shopName.length <= 30;
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        setIsFormValid(isShopNameValid && isEmailValid);
        setShopNameLength(shopName.length);
    }, [shopName, email]);

    return (
        <React.Fragment>
            {/* body */}
            <div className="bg-transparent dark:text-white">
                <h1 className="text-lg mx-5">تکمیل ربات</h1>
                {/* Setting up Bot progressBar */}
                <div className="flex justify-center">
                    <div className="w-[30%] bg-sky-500 h-1 rounded-full my-5 mx-1 dark:bg-sky-800"></div>
                    <div className="w-[30%] bg-sky-500 h-1 rounded-full my-5 mx-1 dark:bg-sky-800"></div>
                    <div className="w-[30%] bg-stone-300 h-1 rounded-full my-5 mx-1 dark:bg-gray-800"></div>
                </div>
                {/* End Setting up Bot progressBar */}
                <div>
                    <h1 className="mx-8 mt-16 text-sm">نام فروشگاه</h1>
                    <div className="relative m-3 bg-white dark:bg-slate-800 mx-6 rounded-[10px]" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.42rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            id="shopNameInput"
                            placeholder="نام فروشگاه"
                            value={shopName}
                            onChange={(e) => setShopName(e.target.value)}
                        />
                        <label
                            htmlFor="shopNameInput"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >
                            نام فروشگاه
                        </label>
                    </div>
                    {/* شمارش طول input */}
                    <ShopNameLengthIndicator shopNameLength={shopNameLength} />
                </div>
                <p className="text-[13px] mx-8 opacity-55" dir="rtl">
                    نام فروشگاه اینترنتی خود را وارد کنید. این  نامی است که مشتریان آن را می‌بینند.
                </p> 
                {/* Email Input */}
                <div>
                    <h1 className="mx-8 mt-16 text-sm">آدرس ایمیل</h1>
                    <div className="relative m-3 bg-white dark:bg-slate-800 mx-6 rounded-[10px]" data-twe-input-wrapper-init>
                        <input
                            type="email"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.42rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            id="emailInput"
                            placeholder="آدرس ایمیل"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                            htmlFor="emailInput"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >
                            آدرس ایمیل
                        </label>
                    </div>
                </div>
                <p className="text-[13px] mx-8 opacity-55" dir="rtl">
                    برای ارتباط با مالک فروشگاه به ایمیلتان نیاز داریم.
                </p>
                {/* Submit Button */}
                {isFormValid && (
                    <Link to="/Home/WelcomeMessage/GettingStart/BotInfo/Template" id="submitButton" className="mt-20 p-4 bg-sky-500 dark:bg-sky-800 rounded-[15px] m-3 w-[87%] flex justify-center mx-auto text-white">
                        بعدی
                        <span className="ps-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                        </span>
                    </Link>
                )}
            </div>
            {/* End body */}
        </React.Fragment>
    );
};
