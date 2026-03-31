import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import FooterSection from "./components/FooterSection";
import GetStartedSection from "./components/GetStartedSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SimpleTransparentPricingSection from "./components/SimpleTransparentPricingSection";
import StateSection from "./components/StateSection";
import ToggleBtnSection from "./components/ToggleBtnSection";
import { toast, ToastContainer } from "react-toastify";

const threeDataFetch = async () => {
  const res = await fetch("/threeData.json");
  return res.json();
};
const threeDataPromise = threeDataFetch();

const dataFetch = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const dataPromise = dataFetch();

function App() {
  const [show, setShow] = useState("products");

  const [recievedProduct, setRecievedProduct] = useState([]);
  const handleRecievedProduct = (product) => {
    const stopReBuy = recievedProduct.find(item => item.name === product.name);
    if(stopReBuy){
      toast.error(`${product.name} is already in Cart`, {duration: 900,position: "bottom-center", autoClose: 2000});
      return;
    }
    setRecievedProduct([...recievedProduct, product]);
    toast.success(`${product.name} successfully added to the cart`,{position: "bottom-center", autoClose: 2000,})
  }
  console.log(recievedProduct);

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <StateSection></StateSection>

      <ToggleBtnSection setShow={setShow} recievedProduct={recievedProduct} show={show}></ToggleBtnSection>

      {show === "products" && <Products dataPromise={dataPromise} handleRecievedProduct={handleRecievedProduct}></Products>}

      {show === "cart" && <Cart recievedProduct={recievedProduct} setRecievedProduct={setRecievedProduct}></Cart>}

      
      <GetStartedSection></GetStartedSection>
      <SimpleTransparentPricingSection
        threeDataPromise={threeDataPromise}
      ></SimpleTransparentPricingSection>
      <FooterSection></FooterSection>

      <ToastContainer />
    </>
  );
}

export default App;
