import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ZoomDesable
document.addEventListener('gesturestart', function (event) {
  event.preventDefault();
  document.body.style.zoom = 1; // برای برخی از مرورگرها
});

document.addEventListener('gesturechange', function (event) {
  event.preventDefault();
  document.body.style.zoom = 1; // برای برخی از مرورگرها
});

document.addEventListener('gestureend', function (event) {
  event.preventDefault();
  document.body.style.zoom = 1; // برای برخی از مرورگرها
});

// فقط جلوگیری از زوم در دستگاه‌های لمسی
document.addEventListener('touchmove', function (event) {
  if (event.scale !== undefined && event.scale !== 1) {
    event.preventDefault();
  }
}, { passive: false });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
