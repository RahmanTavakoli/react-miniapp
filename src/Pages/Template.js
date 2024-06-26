import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export const Template = () => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const radioButtons = document.querySelectorAll('input[name="payment_method"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                setIsChecked(true);
            });
        });

        return () => {
            radioButtons.forEach(radio => {
                radio.removeEventListener('change', () => {
                    setIsChecked(true);
                });
            });
        };
    }, []);

    return (
        <React.Fragment>
            {/*  body  */}
            <div className="bg-transparent dark:text-white">
                <h1 className="text-lg mx-5">قالب فروشگاه</h1>
                {/*  Setting up  Bot progressBar */}
                <div className="flex justify-center">
                    <div className="w-[30%] bg-sky-500 h-1 rounded-full my-5 mx-1 dark:bg-sky-800"></div>
                    <div className="w-[30%] bg-sky-500 h-1 rounded-full my-5 mx-1 dark:bg-sky-800"></div>
                    <div className="w-[30%] bg-sky-500 h-1 rounded-full my-5 mx-1 dark:bg-sky-800"></div>
                </div>
                {/* End Setting up  Bot progressBar */}
                {/*  CheckBox  */}
                <div className="max-w-md mx-5 bg-stone-300 h-auto rounded-md mt-5 p-2 dark:bg-gray-800 bg-opacity-95 shadow py-6 px-4" dir="rtl">
                    <fieldset>
                        <div className="space-y-2">
                            <label htmlFor="template-1"
                                className="text-slate-700 has-[:checked]:ring-indigo-200 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-slate-100 dark:text-gray-400 peer-checked:no-bot">
                                <input name="payment_method" id="template-1" value="google" type="radio"
                                    className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500 peer" />
                                قالب پوشاک
                                {/*  Example Telegram bot link */}
                                <a href="">
                                    <svg fill="#000000" height="25px" width="25px" version="1.1" id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 512 512" xmlSpace="preserve">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <g>
                                                <g>
                                                    <path d="M256,0c-76.462,0-138.724,61.923-139.293,138.253h278.586C394.724,61.923,332.462,0,256,0z M256,107.679 c-16.413,0-29.767-13.353-29.767-29.766c0-16.413,13.354-29.766,29.767-29.766s29.767,13.352,29.767,29.766 C285.767,94.326,272.413,107.679,256,107.679z">
                                                    </path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M55.558,171.645v249.07h61.136v29.542h122.611v28.351h-38.561V512h110.513v-33.391h-38.56v-28.351h122.611v-29.542h61.136 v-249.07H55.558z M116.694,387.324H88.949V205.036h27.745V387.324z M423.051,387.324h-27.745V205.036h27.745V387.324z">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </label>
                            <label htmlFor="template-2"
                                className="text-slate-700 has-[:checked]:ring-indigo-200 has-[:checked]:text-indigo-800 has-[:checked]:bg-indigo-50 grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-slate-100 dark:text-gray-400 peer-checked:bot">
                                <input name="payment_method" id="template-2" value="bot" type="radio"
                                    className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500 peer" />
                                قالب محصولات غذایی
                                {/*  Example Telegram bot link */}
                                <a href="">
                                    <svg fill="#000000" height="25px" width="25px" version="1.1" id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 512 512" xmlSpace="preserve">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <g>
                                                <g>
                                                    <path d="M256,0c-76.462,0-138.724,61.923-139.293,138.253h278.586C394.724,61.923,332.462,0,256,0z M256,107.679 c-16.413,0-29.767-13.353-29.767-29.766c0-16.413,13.354-29.766,29.767-29.766s29.767,13.352,29.767,29.766 C285.767,94.326,272.413,107.679,256,107.679z">
                                                    </path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M55.558,171.645v249.07h61.136v29.542h122.611v28.351h-38.561V512h110.513v-33.391h-38.56v-28.351h122.611v-29.542h61.136 v-249.07H55.558z M116.694,387.324H88.949V205.036h27.745V387.324z M423.051,387.324h-27.745V205.036h27.745V387.324z">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </label>
                        </div>
                    </fieldset>
                </div>
                {/* End CheckBox  */}
                <p className="text-[13px] m-4 opacity-55" dir="rtl">قالب انتخابی شما تاثیری بر روی عملکرد فروشگاه شما نخواهد داشت
                </p>
                {/*  Toggle Content  */}
                <div id="button-content" className={`mt-80 ${isChecked ? 'block' : 'hidden'}`}>
                    <Link to="/Dashboard" id="submitButton"
                        className="mt-40 p-4 bg-sky-500 dark:bg-sky-800 rounded-[15px] m-3 w-[87%] flex justify-center mx-auto text-white">
                        بعدی
                        <span className="ps-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                        </span>
                    </Link>
                </div>
                {/*  End Toggle Content  */}
            </div>
            {/*  End body  */}
        </React.Fragment>
    );
}
