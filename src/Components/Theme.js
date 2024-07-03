export const getThemeParams = () => {
    return window.Telegram.WebApp.themeParams || {
      bg_color: "#ffffff",
      text_color: "#000000",
      button_color: "#1e88e5",
      button_text_color: "#ffffff",
      input_bg_color: "#f0f0f0",
      input_text_color: "#000000",
      input_border_color: "#cccccc"
    };
  };