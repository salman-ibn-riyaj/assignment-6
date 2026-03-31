import React from "react";

const ToggleBtnSection = ({setShow, recievedProduct, show}) => {
  return (
    <div className="w-10/12 mx-auto my-13">
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-4">Premium Digital Tools</h2>
        <p className="text-gray-500">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      {/* name of each tab group should be unique */}
      <div className="flex justify-center mt-4">
        <div className="tabs w-50 justify-center tabs-box">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-4xl checked:bg-violet-600 checked:text-white"
            aria-label="Products"
            defaultChecked
            onClick={()=>setShow('products')}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-4xl ${show==='cart' && 'checked:bg-violet-600 checked:text-white'}`}
            aria-label={`Cart(${recievedProduct.length})`}
            onClick={()=>setShow('cart')}
          />
        </div>
      </div>
    </div>
  );
};

export default ToggleBtnSection;
