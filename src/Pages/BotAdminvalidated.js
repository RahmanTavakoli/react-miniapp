import React from "react"

export const BotAdminvalidated=()=>{
    return (
        <React.Fragment>
         {/* <!-- body --> */}
        <div class=" bg-transparent  dark:text-white">
            <h1 class="text-lg mx-5"> Shop Name حالا آماده است...!</h1>
        {/* <!-- CheckBox --> */}
                <div class="max-w-md mx-3 bg-stone-300 h-auto rounded-md mt-5 p-1 dark:bg-gray-800 bg-opacity-95 shadow py-3 px-4"dir="rtl">
                     {/* <!-- User Validated info EMAIL --> */}
                     <section class="mb-5">
                         <h1 class="text-[11px] opacity-50 mx-2"> آدرس ایمیل </h1>
                         <h1 class="text-[17px] opacity-90 text-blue-500 dark:text-blue-300 mx-2"> Mxxjid@gmail.com </h1>
                     </section>
                     <section class="mb-5">
                         <h1 class="text-[11px] opacity-50 mx-2"> شماره تلفن </h1>
                         <h1 class="text-[17px] opacity-90 text-blue-500 dark:text-blue-300 mx-2"> 09120123456 </h1>
                     </section>
                     <section class="mb-5">
                         <h1 class="text-[11px] opacity-50 mx-2"> نحوه ارتباط  </h1>
                         <h1 class="text-[17px] opacity-90 text-blue-500 dark:text-blue-300 mx-2"> پیام مستقیم </h1>
                     </section>
                     <section class="mb-5">
                         <h1 class="text-[11px] opacity-50 mx-2">  ربات </h1>
                         <h1 class="text-[17px] opacity-90 text-blue-500 dark:text-blue-300 mx-2"> - </h1>
                     </section>
                     <section class="mb-5">
                         <h1 class="text-[11px] opacity-50 mx-2"> قالب فروشگاه  </h1>
                         <h1 class="text-[17px] opacity-90 text-blue-500 dark:text-blue-300 mx-2"> قالب محصولات غذایی </h1>
                     </section>
                </div>
                <div id="" class="mt-1">
                    <a href="index1.html" id="submitButton"
                        class=" mt-40 p-3 bg-sky-500  dark:bg-sky-700 rounded-[15px] m-3 w-[87%] flex justify-center mx-auto text-white">
                        راه اندازی فروشگاه
                    </a>
                </div>
                {/* <!-- End Toggle Content --> */}
        </div>
        </React.Fragment>
    )
}