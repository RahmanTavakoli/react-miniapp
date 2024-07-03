import React from 'react';
import { getThemeParams } from '../Components/Theme';

export const TelTheme = () => {
  const themeParams = getThemeParams();

  const appStyle = {
    backgroundColor: themeParams.bg_color,
    color: themeParams.text_color,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px'
  };

  const inputStyle = {
    backgroundColor: themeParams.input_bg_color,
    color: themeParams.input_text_color,
    border: `1px solid ${themeParams.input_border_color}`,
    padding: '10px',
    margin: '10px 0',
    width: '100%',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    backgroundColor: themeParams.button_color,
    color: themeParams.button_text_color,
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '10px 0'
  };

  return (
    <div style={appStyle}>
      <h1>Telegram Themed App</h1>
      <input type="text" placeholder="First Name" style={inputStyle} />
      <input type="text" placeholder="Last Name" style={inputStyle} />
      <button style={buttonStyle}>Submit</button>
    </div>
  );
};

