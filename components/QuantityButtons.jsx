import React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import useCartStore from "@/store";
import { toast } from "sonner";


const QuantityButtons = ({ product, className }) => {
  const { addItem, getItemCount, removeItem } = useCartStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  const handleRemoveProduct = () => {
    removeItem(product?._id);
    const shortName = product?.name?.substring(0, 12);
    if (itemCount > 1) {
      toast.success("Quantity decreased successfully!");
    } else {
      toast.success(`${shortName} removed successfully!`);
    }
  };

  const handleAddProduct = () => {
    addItem(product);
    const shortName = product?.name?.substring(0, 12);
    toast.success(`${shortName}... added successfully!`);
  };

  return (
    <div className={cn("flex items-center gap-1 text-base pb-1", className)}>
      <Button
        onClick={handleRemoveProduct}
        disabled={itemCount === 0 || isOutOfStock}
        variant="outline"
        size="icon"
        className="w-6 h-6"
      >
        <Minus size={16} />
      </Button>
      <span className="font-semibold w-8 text-center text-darkColor">
        {itemCount}
      </span>
      <Button
        onClick={handleAddProduct}
        disabled={isOutOfStock}
        variant="outline"
        size="icon"
        className="w-6 h-6"
      >
        <Plus size={16} />
      </Button>
    </div>
  );
};

export default QuantityButtons;
