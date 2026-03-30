import React from "react";
import { toast } from "react-toastify";

const CartCard = ({ productForCart, setRecievedProduct, recievedProduct }) => {

    
    const handleRemove = () =>{
        const filteredProduct = recievedProduct.filter(item => item.name !== productForCart.name)
        setRecievedProduct(filteredProduct);
        toast.warning('Removed from cart', {position: "bottom-center", autoClose: 2000});
    }
    
  console.log(productForCart);
  return (
    <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl">
      <div className="flex gap-3 items-center">
        <div>
          <img className="w-8 p-1 rounded-full border-2 border-gray-200" src={productForCart.icon} alt="" />
        </div>
        <div>
          <h2 className="font-bold">{productForCart.name}</h2>
          <h4>${productForCart.price}</h4>
        </div>
      </div>

      <button onClick={handleRemove} className="text-red-600">Remove</button>
    </div>
  );
};

export default CartCard;
