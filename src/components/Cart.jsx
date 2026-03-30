import React from "react";
import CartCard from "./CartCard";
import { toast } from "react-toastify";
import { BsCart4 } from "react-icons/bs";

const Cart = ({ recievedProduct, setRecievedProduct }) => {
  const totalPrice = recievedProduct.reduce((sum, item) => sum + item.price, 0);
  console.log(recievedProduct);

  const handleProceed = () => {
    setRecievedProduct([]);
    toast.success("Purchasing successful");
  };
  return (
    <div className="w-10/12 mx-auto mb-12">
      {recievedProduct.length === 0 ? (
        <div className="text-center bg-slate-300 rounded-xl py-5 border-2 border-fuchsia-600">
          <div className="flex justify-center text-4xl">
            <h2>
            <BsCart4 />
          </h2>
          </div>
          <p className="font-semibold text-2xl text-gray-500 mt-2">
            Your cart is empty
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
          <div className="space-y-2">
            {recievedProduct.map((productForCart) => (
              <CartCard
                key={productForCart.id}
                productForCart={productForCart}
                recievedProduct={recievedProduct}
                setRecievedProduct={setRecievedProduct}
              ></CartCard>
            ))}
          </div>

          <div className="font-bold text-3xl flex justify-between items-center p-4 rounded-xl my-1.5">
            <h2>Total:</h2>
            <span>${totalPrice}</span>
          </div>

          <button
            onClick={handleProceed}
            className="btn w-full bg-linear-to-r from-violet-700 to-purple-500 rounded-4xl text-white font-bold"
          >
            Proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
