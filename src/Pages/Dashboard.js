import React from "react"

export const Dashboard= ()=>{
    return (
        <React.Fragment>
              {/* {/* body  */}
    <div class=" bg-transparent  dark:text-white">
          {/* {/* Shop Hero  */}
        <div class="bg-hero h-[30vh] w-full dark:bg-hero-dark">
            <div class=" flex justify-between ">
                <button class="p-2 text-sm m-4 text-white rounded-[20px] backdrop-blur-lg"> اشتراک گذاری </button>
                <button class="p-2 text-sm m-4 text-white rounded-[20px] backdrop-blur-lg"> ویرایش </button>
            </div>
            <div class=" mt-[20%]">
                <div class="p-2 text-lg ms-4 text-black dark:text-white">
                    <button class="flex"> نام فروشگاه
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 scale-x-[-1] ms-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                    </button>
                </div>
            </div>
            <div class=" ">
                <div class="p-2 text-sm font-light ms-4 text-black dark:text-white">
                    <button> 091201234567
                    </button>
                    <span class="text-[30px]">.</span>
                    <button dir="ltr"> @User_ID
                    </button>
                </div>
            </div>
        </div>
          {/* {/* End Shop Hero  */}
          {/* {/* menu  */}
        <button
            class="w-[86%] bg-white m-6 mx-auto rounded-[10px] flex justify-between dark:bg-slate-800 dark:text-white">
            <div class="my-auto m-6">
                <div class="opacity-30 flex">
                      {/* {/* Premium lvl */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4 my-auto me-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <p > رایگان</p>
                </div>
            </div>
            <div class="flex">
                <div class="my-auto ">
                    <h1 class="text-base text-center   mx-3 opacity-75"> پرمینیوم </h1>
                </div>
                <div class="h-8 w-8 bg-gradient-to-bl from-blue-400 via-violet-400 to-violet-600 m-2 me-4 rounded-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"
                        class="size-5 m-auto mt-1">
                        <path fill-rule="evenodd"
                            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </button>
        <section class="w-[86%] bg-white m-6 mx-auto rounded-[10px] dark:bg-slate-800 dark:text-white">
              {/* {/* Menu Btn  */}
            <button class="w-full bg-white flex rounded-t-[10px] justify-between dark:bg-slate-800 dark:text-white">
                <div class="my-auto m-6">
                    <div class="opacity-30 flex">
                          {/* {/* Premium lvl */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 my-auto me-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div class="flex">
                    <div class="my-auto ">
                        <h1 class="text-base text-center   mx-3 opacity-75"> دسته بندی </h1>
                    </div>
                    <div class="h-8 w-8 bg-gradient-to-bl from-sky-400 to-blue-700 m-2 me-4 rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"
                            class="size-6 mx-auto mt-1">
                            <path
                                d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                        </svg>


                    </div>
                </div>
            </button>
              {/* {/* Menu Btn  */}
              {/* {/* Divider  */}
            <div class="h-[1px] w-[90%] mx-auto bg-gray-100 dark:bg-slate-700 opacity-75"></div>
              {/* {/*End Divider  */}
            <button class="w-full bg-white flex rounded-t-[10px] justify-between dark:bg-slate-800 dark:text-white">
                <div class="my-auto m-6">
                    <div class="opacity-30 flex">
                          {/* {/* Premium lvl */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 my-auto me-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div class="flex">
                    <div class="my-auto ">
                        <h1 class="text-base text-center   mx-3 opacity-75"> محصولات </h1>
                    </div>
                    <div class="h-8 w-8 bg-gradient-to-bl from-yellow-300 to-amber-500 m-2 me-4 rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"
                            class="size-6 mx-auto mt-1">
                            <path
                                d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                            <path
                                d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                            <path
                                d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                            <path
                                d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                        </svg>



                    </div>
                </div>
            </button>
              {/* {/* Divider  */}
            <div class="h-[1px] w-[90%] mx-auto bg-gray-100  dark:bg-slate-700 opacity-75"></div>
              {/* {/*End Divider  */}
              {/* {/* Menu Btn  */}
            <button class="w-full bg-white flex rounded-t-[10px] justify-between dark:bg-slate-800 dark:text-white">
                <div class="my-auto m-6">
                    <div class="opacity-30 flex">
                          {/* {/* Premium lvl */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 my-auto me-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div class="flex">
                    <div class="my-auto ">
                        <h1 class="text-base text-center   mx-3 opacity-75"> اطلاع رسانی ها </h1>
                    </div>
                    <div class="h-8 w-8 bg-gradient-to-bl from-lime-400 to-green-400 m-2 me-4 rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff"
                            class="size-6 mx-auto mt-1">
                            <path
                                d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
                        </svg>



                    </div>
                </div>
            </button>
              {/* {/* Divider  */}
            <div class="h-[1px] w-[90%] mx-auto bg-gray-100  dark:bg-slate-700 opacity-75"></div>
              {/* {/*End Divider  */}
              {/* {/* Menu Btn  */}
            <button class="w-full bg-white flex rounded-b-[10px] justify-between dark:bg-slate-800 dark:text-white">
                <div class="my-auto m-6">
                    <div class="opacity-30 flex">
                          {/* {/* Premium lvl */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 my-auto me-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div class="flex">
                    <div class="my-auto ">
                        <h1 class="text-base text-center   mx-3 opacity-75"> تحلیل </h1>
                    </div>
                    <div class="h-8 w-8 bg-gradient-to-bl from-red-600 to-red-900 m-2 me-4 rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"
                            class="size-6 mx-auto mt-1">
                            <path fill-rule="evenodd"
                                d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
                                clip-rule="evenodd" />
                        </svg>



                    </div>
                </div>
            </button>
        </section>
        <section class="w-[86%] bg-white m-6 mx-auto rounded-[10px] dark:bg-slate-800 dark:text-white">
              {/* {/* Menu Btn  */}
            <button class="w-full bg-white flex rounded-t-[10px] justify-between dark:bg-slate-800 dark:text-white">
                <div class="my-auto m-6">
                    <div class="opacity-30 flex">
                          {/* {/* Premium lvl */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 my-auto me-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div class="flex">
                    <div class="my-auto ">
                        <h1 class="text-base text-center   mx-3 opacity-75"> دسته بندی </h1>
                    </div>
                    <div class="h-8 w-8 bg-gradient-to-bl from-sky-400 to-blue-700 m-2 me-4 rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"
                            class="size-6 mx-auto mt-1">
                            <path
                                d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                        </svg>


                    </div>
                </div>
            </button>
              {/* {/* Menu Btn  */}
              {/* {/* Divider  */}
            <div class="h-[1px] w-[90%] mx-auto bg-gray-100 dark:bg-slate-700 opacity-75"></div>
              {/* {/*End Divider  */}
            <button class="w-full bg-white flex rounded-t-[10px] justify-between dark:bg-slate-800 dark:text-white">
                <div class="my-auto m-6">
                    <div class="opacity-30 flex">
                          {/* {/* Premium lvl */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 my-auto me-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div class="flex">
                    <div class="my-auto ">
                        <h1 class="text-base text-center   mx-3 opacity-75"> محصولات </h1>
                    </div>
                    <div class="h-8 w-8 bg-gradient-to-bl from-yellow-300 to-amber-500 m-2 me-4 rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"
                            class="size-6 mx-auto mt-1">
                            <path
                                d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                            <path
                                d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                            <path
                                d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                            <path
                                d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                        </svg>



                    </div>
                </div>
            </button>
              {/* {/* Divider  */}
            <div class="h-[1px] w-[90%] mx-auto bg-gray-100  dark:bg-slate-700 opacity-75"></div>
              {/* {/*End Divider  */}
              {/* {/* Menu Btn  */}
            <button class="w-full bg-white flex rounded-t-[10px] justify-between dark:bg-slate-800 dark:text-white">
                <div class="my-auto m-6">
                    <div class="opacity-30 flex">
                          {/* {/* Premium lvl */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 my-auto me-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div class="flex">
                    <div class="my-auto ">
                        <h1 class="text-base text-center   mx-3 opacity-75"> اطلاع رسانی ها </h1>
                    </div>
                    <div class="h-8 w-8 bg-gradient-to-bl from-lime-400 to-green-400 m-2 me-4 rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff"
                            class="size-6 mx-auto mt-1">
                            <path
                                d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
                        </svg>



                    </div>
                </div>
            </button>
              {/* {/* Divider  */}
            <div class="h-[1px] w-[90%] mx-auto bg-gray-100  dark:bg-slate-700 opacity-75"></div>
              {/* {/*End Divider  */}
              {/* {/* Menu Btn  */}
            <button class="w-full bg-white flex rounded-b-[10px] justify-between dark:bg-slate-800 dark:text-white">
                <div class="my-auto m-6">
                    <div class="opacity-30 flex">
                          {/* {/* Premium lvl */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 my-auto me-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div class="flex">
                    <div class="my-auto ">
                        <h1 class="text-base text-center   mx-3 opacity-75"> تحلیل </h1>
                    </div>
                    <div class="h-8 w-8 bg-gradient-to-bl from-red-600 to-red-900 m-2 me-4 rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"
                            class="size-6 mx-auto mt-1">
                            <path fill-rule="evenodd"
                                d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
                                clip-rule="evenodd" />
                        </svg>



                    </div>
                </div>
            </button>
        </section>
          {/* {/* lang  */}
        <button
            class="w-[86%] bg-white m-6 mx-auto rounded-[10px] flex justify-between dark:bg-slate-800 dark:text-white">
            <div class="my-auto m-6">
                <div class="opacity-30 flex">
                      {/* {/* Premium lvl */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4 my-auto me-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <p> فارسی</p>
                </div>
            </div>
            <div class="flex">
                <div class="my-auto ">
                    <h1 class="text-base text-center   mx-3 opacity-75"> زبان </h1>
                </div>
                <div class="h-8 w-8 bg-gradient-to-bl from-blue-400 via-violet-400 to-violet-600 m-2 me-4 rounded-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"
                        class="size-5 m-auto mt-1">
                        <path fill-rule="evenodd"
                            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </button>
        <section class="w-[86%] bg-white m-6 mx-auto rounded-[10px] dark:bg-slate-800 dark:text-white">
              {/* {/* Menu Btn  */}
            <button class="w-full bg-white flex rounded-t-[10px] justify-between dark:bg-slate-800 dark:text-white">
                <div class="my-auto m-6">
                    <div class="opacity-30 flex">
                          {/* {/* Premium lvl */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 my-auto me-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div class="flex">
                    <div class="my-auto ">
                        <h1 class="text-base text-center   mx-3 opacity-75"> دسته بندی </h1>
                    </div>
                    <div class="h-8 w-8 bg-gradient-to-bl from-sky-400 to-blue-700 m-2 me-4 rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"
                            class="size-6 mx-auto mt-1">
                            <path
                                d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                        </svg>


                    </div>
                </div>
            </button>
              {/* {/* Menu Btn  */}
              {/* {/* Divider  */}
            <div class="h-[1px] w-[90%] mx-auto bg-gray-100 dark:bg-slate-700 opacity-75"></div>
              {/* {/*End Divider  */}
            <button class="w-full bg-white flex rounded-t-[10px] justify-between dark:bg-slate-800 dark:text-white">
                <div class="my-auto m-6">
                    <div class="opacity-30 flex">
                          {/* {/* Premium lvl */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 my-auto me-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div class="flex">
                    <div class="my-auto ">
                        <h1 class="text-base text-center   mx-3 opacity-75"> محصولات </h1>
                    </div>
                    <div class="h-8 w-8 bg-gradient-to-bl from-yellow-300 to-amber-500 m-2 me-4 rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"
                            class="size-6 mx-auto mt-1">
                            <path
                                d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                            <path
                                d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                            <path
                                d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                            <path
                                d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                        </svg>



                    </div>
                </div>
            </button>
              {/* {/* Divider  */}
            <div class="h-[1px] w-[90%] mx-auto bg-gray-100  dark:bg-slate-700 opacity-75"></div>
              {/* {/*End Divider  */}
              {/* {/* Menu Btn  */}
            <button class="w-full bg-white flex rounded-b-[10px] justify-between dark:bg-slate-800 dark:text-white">
                <div class="my-auto m-6">
                    <div class="opacity-30 flex">
                          {/* {/* Premium lvl */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 my-auto me-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div class="flex">
                    <div class="my-auto ">
                        <h1 class="text-base text-center   mx-3 opacity-75"> تحلیل </h1>
                    </div>
                    <div class="h-8 w-8 bg-gradient-to-bl from-red-600 to-red-900 m-2 me-4 rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"
                            class="size-6 mx-auto mt-1">
                            <path fill-rule="evenodd"
                                d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
                                clip-rule="evenodd" />
                        </svg>



                    </div>
                </div>
            </button>
        </section>
    </div>
      {/* {/* End body  */}

   
        </React.Fragment>
    )
}