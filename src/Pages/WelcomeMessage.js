import { Link } from "react-router-dom";
import React from "react"
import imgSrc from '../img/chpic.su_-_AniDucks_043-ezgif.com-resize.gif';

export const WelcomeMessage=()=>{
    return (
        <React.Fragment>
     {/* body  */}
    <div class=" bg-transparent  dark:text-white">
        <div class=" justify-center mt-10">
        <img src={imgSrc} className="mx-auto" alt="AniDucks" />
            <h1 class="text-[15px] m-12 text-center " dir="ltr"> چیه؟ vendors </h1>
            <p class="text-sm text-center mx-20 opacity-50" dir="rtl">در <span class="text-sky-600">vendors</span>
                میتوانید فروشگاه شخصی خود را بدون نیاز هیچ دانش خاصی بدون برنامه نویس در پیام رسان تلگرام بسازید و شخصی
                سازی کنید آسان و منعطف</p>
        </div>
        <Link to="/Home/WelcomeMessage/GettingStart"
            class="p-4 bg-sky-600 rounded-[15px] my-12 w-[87%] flex justify-center mx-auto font-semibold text-white">برو بریم
        </Link>

    </div>
     {/* End body  */}
        </React.Fragment>
    )
}