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
    }, 3000); // مدت زمان شبیه‌سازی شده برای بارگذاری
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
            <Route path='/WelcomeMessage' element={ <WelcomeMessage />}/>
            <Route path='/GettingStart' element={ <GettingStart />}/>
            <Route path='/BotInfo' element={ <BotInfo />}/>
            <Route path='/Template' element={ <Template />}/>
            <Route path='/Bot&Adminvalidated' element={ <BotAdminvalidated />}/>
            <Route path='/Dashboard' element={ <Dashboard />}/>
            <Route path='/AboutUs' element={ <AboutUs />}/>
            <Route path='/Help' element={ <Help />}/>
            <Route path='/Category' element={ <Category />}/>
            <Route path='/Wallet' element={ <Wallet />}/>
            <Route path='/FAQ' element={ <FAQ />}/>
            <Route path='*' element={ <Error404 />}/>
          </Routes>
        </Router>
      )}
    </section>
  );
}

export default App;
