export const getClassNames = (shopNameLength) => {
    if (shopNameLength > 0 && shopNameLength <= 4) {
      return "text-[13px] mx-8 mt-1 text-red-700 opacity-55";
    }
    if (shopNameLength > 4 && shopNameLength <= 30) {
      return "text-[13px] mx-8 mt-1 opacity-55";
    }
    if (shopNameLength > 30) {
      return "text-[13px] mx-8 mt-1 text-red-700 opacity-55";
    }
    return "";
  };
  
export  const ShopNameLengthIndicator = ({ shopNameLength }) => {
    if (shopNameLength > 0) {
      return (
        <p className={getClassNames(shopNameLength)} dir="rtl">
          30/ {shopNameLength}
        </p>
      );
    }
    return null;
  };