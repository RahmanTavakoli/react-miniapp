import { Link } from "react-router-dom";
import React from "react"
import imgSrc from '../img/chpic.su_-_AniDucks_043-ezgif.com-resize.gif';

export const Home=()=>{
    return (
        <div>
             {/* dark Mode button  */}

      {/* End dark Mode button  */}
     {/* <!-- body -->  */}
    <div className=" bg-transparent  dark:text-white">
         {/* <!-- shop BTN -->  */}
        <button className="w-[86%] bg-white m-5 mx-auto rounded-[10px] flex justify-between dark:bg-slate-800 dark:text-white" dir="ltr">
            <div className="flex">
                <span className="relative flex h-3 w-3" >
                    <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-16 w-16 my-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  
                <div className="my-auto ">
                    <h1 className="text-lg text-center font-semibold h-5"> Majid </h1>
                    <p className="text-sm opacity-40 mt-4"> @majid_torke</p>
                </div>
            </div>
            <div className="my-auto m-6">
                <div className="opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </button>
         {/* <!--End shop BTN -->  */}
         {/* <!-- circle menus -->  */}
        <div className="flex justify-center">
             {/* <!-- AboutUs -->  */}
            <div>
                <Link  to='/AboutUs'>
                <button className="ring-0 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full p-1 focus:ring-blue-100 focus:ring-0">
                    <div className="ring-2 ring-stone-200 bg-gradient-to-b from-cyan-400 to-blue-500 p-4 rounded-full dark:ring-gray-800">
                        <span className="text-stone-200 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </span>
                    </div>
                </button>
                </Link>
                <p className="text-sm opacity-45 text-center">درباره ما</p>
            </div>
            {/* <!-- Tutorial -->  */}
            <div>
                <Link to='/Help'>
                <button className="ring-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-0.5 p-1 focus:ring-blue-100 focus:ring-0">
                    <div className="ring-2 ring-stone-200 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-full  dark:ring-gray-800">
                        <span className="text-stone-200 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                            </svg>
                        </span>
                    </div>
                </button>
                </Link>
                <p className="text-sm opacity-45 text-center">راهنما</p>
            </div>
             {/* <!-- Category -->  */}
            <div>
                <Link to='/Category'>
                <button 
                    className="ring-0 bg-gradient-to-b from-indigo-500 from-5% via-sky-500 via-20% to-emerald-500 to-80% rounded-full p-1 focus:ring-blue-100 focus:ring-0">
                    <div className="ring-2 ring-stone-200 bg-gradient-to-b from-indigo-500 from-5% via-sky-500 via-20% to-emerald-500 to-80% p-4 rounded-full  dark:ring-gray-800">
                        <span className="text-stone-200 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </span>
                    </div>
                </button>
                </Link>
                <p className="text-sm opacity-45 text-center">دسته بندی</p>
            </div>
             {/* <!-- Wallet -->  */}
            <div>
                <Link to='/Wallet'>
                <button className="ring-0 bg-gradient-to-b from-blue-300 to-blue-600 rounded-full mx-0.5 p-1 focus:ring-blue-100 focus:ring-0">
                    <div className="ring-2 ring-stone-200 bg-gradient-to-b from-blue-300 to-blue-600 p-4 rounded-full  dark:ring-gray-800">
                        <span className="text-stone-200 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
</svg>


                        </span>
                    </div>
                </button>
                </Link>

                <p className="text-sm opacity-45 text-center">کیف پول</p>
            </div>
             {/* <!-- FAQ -->  */}
            <div>
                <Link to='/FAQ'>
                <button 
                    className="ring-0 bg-gradient-to-b from-purple-300 to-purple-700 rounded-full p-1 focus:ring-blue-100 focus:ring-0">
                    <div className="ring-2 ring-stone-200 bg-gradient-to-b from-purple-300 to-purple-700 p-4 rounded-full  dark:ring-gray-800">
                        <span className="text-stone-200 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                            </svg>

                        </span>
                    </div>
                </button>
                </Link>
                <p className="text-sm opacity-45 text-center">FAQ</p>
            </div>
        </div>
         {/* <!--End circle menus -->  */}
        <div className=" justify-center mt-10">
            <h1 className="text-lg text-center"> فروشگاه شما</h1>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20 path mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

            <h1 className="text-[30px] m-3 text-center ">خوش آمدید</h1>
            <p className="text-sm ms-7 opacity-50">در اینجا میتوانید فروشگاه خود را ببینید</p>
        </div>
        <Link to="/WelcomeMessage" className="p-5 bg-blue-800 rounded-[15px] m-3 w-[87%] flex justify-center mx-auto text-white">وارد شدن
            <span classNameName="ps-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  
            </span>
        </Link>

    </div>
     {/* <!-- End body -->  */}
        </div>
    )
}