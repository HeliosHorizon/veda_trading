import { cn } from "@/lib/utils";
import React from "react";

const PriceFormatter = ({ amount, className }) => {
  const formattedPrice = Number(amount).toLocaleString("en-IN", {
    currency: "INR",
    style: "currency",
    minimumFractionDigits: 2,
  });

  return (
    <span className={cn("text-sm font-semibold text-darkColor", className)}>
      {formattedPrice}
    </span>
  );
};

export default PriceFormatter;

