import React from "react";
import Feature from "./Feature";
import { RiH5 } from "react-icons/ri";

const ProductCard = ({ product, handleRecievedProduct }) => {
  const { features } = product;
  console.log(product);
  return (
    <div className="p-4 rounded-xl shadow flex flex-col space-y-2">
      <span className="flex justify-end">
        <small className="bg-cyan-300 p-1 rounded-3xl inline-block text-right">
          {product.tag}
        </small>
      </span>
      <img
        className="w-8 mb-3 p-1 rounded-full bg-slate-50 border-1 border-gray-100"
        src={product.icon}
        alt=""
      />

      <h2 className="font-bold text-xl">{product.name}</h2>

      <p className="text-gray-500">{product.description}</p>

      <h3>
        <p className="font-bold">
          {" "}
          ${product.price}/{product.period}
        </p>
      </h3>

      <div className="flex-1">
        <ul className="text-gray-500">
          {features.map((feature, index) => (
            <Feature key={index} feature={feature}></Feature>
          ))}
        </ul>
      </div>

      <button
        onClick={() => handleRecievedProduct(product)}
        className="btn w-full rounded-4xl bg-linear-to-r from-violet-800 to-purple-400 text-white font-bold "
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
