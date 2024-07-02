import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { AboutUs } from '../Pages/AboutUs';
import { BotAdminvalidated } from '../Pages/BotAdminvalidated';
import { BotInfo } from '../Pages/BotInfo';
import { Category } from '../Pages/Category';
import { Dashboard } from '../Pages/Dashboard';
import { Error404 } from '../Pages/404';
import { FAQ } from '../Pages/FAQ';
import { GettingStart } from '../Pages/GettingStart';
import { Help } from '../Pages/Help';
import { Home } from '../Pages/Home';
import { Template } from '../Pages/Template';
import { Wallet } from '../Pages/Wallet';
import WebApp from '@twa-dev/sdk'
import { WelcomeMessage } from '../Pages/WelcomeMessage';

const RoutesComponent = () => {
  const navigate = useNavigate();

 useEffect(() => {
    WebApp.ready();
    WebApp.BackButton.show();
    WebApp.onEvent('backButtonClicked', function() {
      navigate(-1); // برگشت به صفحه قبل
    });
    
    return () => {
      WebApp.offEvent('backButtonClicked');
    };
  }, [navigate]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Home/WelcomeMessage' element={<WelcomeMessage />} />
      <Route path='/Home/WelcomeMessage/GettingStart' element={<GettingStart />} />
      <Route path='/Home/WelcomeMessage/GettingStart/BotInfo' element={<BotInfo />} />
      <Route path='/Home/WelcomeMessage/GettingStart/BotInfo/Template' element={<Template />} />
      <Route path='/Home/WelcomeMessage/GettingStart/BotInfo/Template/Bot&Adminvalidated' element={<BotAdminvalidated />} />
      <Route path='/Home/WelcomeMessage/GettingStart/BotInfo/Template/Bot&Adminvalidated/Dashboard' element={<Dashboard />} />
      <Route path='/Home/AboutUs' element={<AboutUs />} />
      <Route path='/Home/Help' element={<Help />} />
      <Route path='/Home/Category' element={<Category />} />
      <Route path='/Home/Wallet' element={<Wallet />} />
      <Route path='/Home/FAQ' element={<FAQ />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
};


export default RoutesComponent;