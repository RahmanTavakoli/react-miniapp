// App.js

import React, { useEffect, useState } from 'react';

import Preloader from './Pages/Preloader';
import RoutesComponent from './Components/AppRoutes'; // Import the RoutesComponent

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
        <RoutesComponent />
      )}
    </section>
  );
}

export default App;
