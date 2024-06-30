import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { AboutUs } from "../Pages/AboutUs";
import { BotAdminvalidated } from "../Pages/BotAdminvalidated";
import { BotInfo } from "../Pages/BotInfo";
import { Category } from "../Pages/Category";
import { Dashboard } from "../Pages/Dashboard";
import { Error404 } from '../Pages/404';
import { FAQ } from "../Pages/FAQ";
import { GettingStart } from "../Pages/GettingStart";
import { Help } from "../Pages/Help";
import { Home } from "../Pages/Home";
import { Template } from "../Pages/Template";
import ThemeSwitcher from "../Pages/ThemeSwitcher";
import { Wallet } from "../Pages/Wallet";
import { WelcomeMessage } from "../Pages/WelcomeMessage";

const AppRoutes = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      const handleBackButton = () => {
        if (window.Telegram.WebApp) {
          window.Telegram.WebApp.BackButton.show();
          window.Telegram.WebApp.BackButton.onClick(() => {
            navigate(-1);
          });
        }
      };
  
      handleBackButton();
  
      return () => {
        if (window.Telegram.WebApp) {
          window.Telegram.WebApp.BackButton.hide();
          window.Telegram.WebApp.BackButton.offClick();
        }
      };
    }, [location, navigate]);
  
    useEffect(() => {
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = ''; // Chrome requires returnValue to be set
      };
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);
  
    return (
      <>
        <ThemeSwitcher />
        <Routes>
          <Route path='/Home' element={ <Home />}/>
          <Route path='/Home/WelcomeMessage' element={ <WelcomeMessage />}/>
          <Route path='/Home/WelcomeMessage/GettingStart' element={ <GettingStart />}/>
          <Route path='/Home/WelcomeMessage/GettingStart/BotInfo' element={ <BotInfo />}/>
          <Route path='/Home/WelcomeMessage/GettingStart/BotInfo/Template' element={ <Template />}/>
          <Route path='/Home/WelcomeMessage/GettingStart/BotInfo/Template/Bot&Adminvalidated' element={ <BotAdminvalidated />}/>
          <Route path='/Home/WelcomeMessage/GettingStart/BotInfo/Template/Bot&Adminvalidated/Dashboard' element={ <Dashboard />}/>
          <Route path='/Home/AboutUs' element={ <AboutUs />}/>
          <Route path='/Home/Help' element={ <Help />}/>
          <Route path='/Home/Category' element={ <Category />}/>
          <Route path='/Home/Wallet' element={ <Wallet />}/>
          <Route path='/Home/FAQ' element={ <FAQ />}/>
          <Route path='*' element={ <Error404 />}/>
        </Routes>
      </>
    );
  };
  
  export default AppRoutes;