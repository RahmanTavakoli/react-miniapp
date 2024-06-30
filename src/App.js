import './App.css';

import React, { useEffect, useState } from 'react';

import AppRoutes from './AppRoutes';
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
