// components/BasketIcon.jsx
/*
import { useBasket } from "../context/BasketContext";
import { useEffect, useState } from "react";

export default function BasketIcon({ className }) {
  const { totalItems } = useBasket();
  const icon = totalItems > 0 ? "/basket-full.png" : "/basket-empty.png";
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (totalItems > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [totalItems]);

  return (
    <img
      src={icon}
      alt="Basket icon"
      className={`${className} object-contain mx-auto transition-all duration-300 ${
        animate ? "animate-basket-bounce" : ""
      }`}
    />
  );
}
*/