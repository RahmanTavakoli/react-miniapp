import './App.css';

import React, { useEffect, useState } from 'react';

import AppRoutes from './Component/AppRoutes';
import Preloader from './Pages/Preloader';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی بارگذاری
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // مدت زمان شبیه‌سازی شده برای بارگذاری
  }, []);

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
    <section>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <AppRoutes />
        </Router>
      )}
    </section>
  );
}

export default App;