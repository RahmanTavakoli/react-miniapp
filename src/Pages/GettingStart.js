import React, { useState } from "react";

import { Link } from "react-router-dom";

export const GettingStart = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [botToken, setBotToken] = useState('');
    const [isBotTokenValid, setIsBotTokenValid] = useState(false);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        if (event.target.value === 'no-bot') {
            setIsBotTokenValid(false);
        }
    };

    const handleBotTokenChange = (event) => {
        const token = event.target.value;
        setBotToken(token);
        const isValid = /^(\d+):[A-Za-z0-9_-]{35}$/.test(token); // Telegram Bot Token Pattern
        setIsBotTokenValid(isValid);
    };

    return (
        <React.Fragment>
            {/* body */}
            <div className="bg-transparent dark:text-white">
                <h1 className="text-lg mx-5">راه اندازی ربات</h1>
                {/* Setting up Bot progressBar */}
                <div className="flex justify-center">
                    <div className="w-[30%] bg-sky-500 h-1 rounded-full my-5 mx-1 dark:bg-sky-800"></div>
                    <div className="w-[30%] bg-stone-300 h-1 rounded-full my-5 mx-1 dark:bg-gray-800"></div>
                    <div className="w-[30%] bg-stone-300 h-1 rounded-full my-5 mx-1 dark:bg-gray-800"></div>
                </div>
                {/* End Setting up Bot progressBar */}
                <p className="opacity-55 text-sm mx-5">انتخاب تنظیمات ربات</p>
                {/* CheckBox */}
                <div className="max-w-md mx-5 bg-stone-300 h-auto rounded-md mt-5 p-2 dark:bg-gray-800 shadow py-6 px-4" dir="rtl">
                    <fieldset>
                        <div className="space-y-2">
                            <label htmlFor="no-bot"
                                className="text-slate-700 has-[:checked]:ring-indigo-200 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-slate-100 dark:text-gray-400 peer-checked:no-bot">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>
                                راه اندازی فروشگاه
                                <input name="payment_method" id="no-bot" value="no-bot" type="radio"
                                    className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500 peer"
                                    onChange={handleOptionChange}></input>
                            </label>
                            <label htmlFor="bot"
                                className="text-slate-700 has-[:checked]:ring-indigo-200 has-[:checked]:text-indigo-800 has-[:checked]:bg-indigo-50 grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-slate-100 dark:text-gray-400 peer-checked:bot">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                تنظیم ربات اختصاصی
                                <input name="payment_method" id="bot" value="bot" type="radio"
                                    className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500 peer"
                                    onChange={handleOptionChange}></input>
                            </label>
                        </div>
                    </fieldset>
                </div>
                {/* End CheckBox */}
                <p className="text-[13px] m-8 opacity-55" dir="rtl">
                    اگر نیاز به دریافت اعلان‌های سفارش در یک ربات اختصاصی دارید، باید یک ربات را متصل کنید. <span className="text-red-700">در صورت عدم اتصال ربات</span> اعلان‌های سفارش در پیام‌های شخصی برای شما فرستاده می‌شود.
                </p>
                {/* Toggle Content */}
                {selectedOption === 'bot' && (
                    <div id="extra-content" className="mt-4">
                        <div>
                            <h1 className="mx-8 text-sm">توکن  ربات</h1>
                            <div className="relative m-3 bg-white dark:bg-slate-800 mx-6 rounded-[10px]" data-twe-input-wrapper-init>
                                <input type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.42rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput1" placeholder="Example label" 
                                    value={botToken}
                                    onChange={handleBotTokenChange}/>
                                <label htmlFor="exampleFormControlInput1"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">Bot Token
                                </label>
                            </div>
                        </div>
                        <p className="text-[13px] mx-8 opacity-55" dir="rtl">
                            ما برای ارائه خدمات به توکن ربات شما نیاز داریم.
                        </p>
                        <a href="" className="text-[11px] mx-8 opacity-55 text-blue-700" dir="rtl">
                            راهنمای ساخت ربات
                        </a>
                    </div>
                )}
                {selectedOption === 'no-bot' && (
                    <div id="no-bot-extra-content" className="mt-50">
                        <Link to="/Home/WelcomeMessage/GettingStart/BotInfo" id="submitButton" className="mt-40 p-4 bg-sky-500 dark:bg-sky-800 rounded-[15px] m-3 w-[87%] flex justify-center mx-auto text-white">بعدی
                            <span className="ps-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                )}
            </div>
            {/* End body */}
        </React.Fragment>
    );
};
