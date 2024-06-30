import './App.css';

import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AboutUs } from "./Pages/AboutUs";
import { BotAdminvalidated } from "./Pages/BotAdminvalidated";
import { BotInfo } from "./Pages/BotInfo";
import { Category } from "./Pages/Category";
import { Dashboard } from "./Pages/Dashboard";
import { Error404 } from './Pages/404';
import { FAQ } from "./Pages/FAQ";
import { GettingStart } from "./Pages/GettingStart";
import { Help } from "./Pages/Help";
import { Home } from "./Pages/Home";
import Preloader from './Pages/Preloader';
import { Template } from "./Pages/Template";
import ThemeSwitcher from "./Pages/ThemeSwitcher";
import { Wallet } from "./Pages/Wallet";
import { WelcomeMessage } from "./Pages/WelcomeMessage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی بارگذاری
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); //  زمان شبیه‌سازی شده برای بارگذاری
  }, []);

  return (
    <section>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <ThemeSwitcher />
        <Routes>
          <Route path='/' element={ <Home />}/>
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
        </Router>
      )}
    </section>
  );
}

export default App;
