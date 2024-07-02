import './App.css';

import React, { useEffect, useState } from 'react';

import Preloader from './Pages/Preloader';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Components/AppRoutes';
import ThemeSwitcher from "./Pages/ThemeSwitcher"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی بارگذاری
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // زمان شبیه‌سازی شده برای بارگذاری
  }, []);

  return (
    <section>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <ThemeSwitcher/>
          <RoutesComponent />
        </Router>
      )}
    </section>
  );
}

export default App;
