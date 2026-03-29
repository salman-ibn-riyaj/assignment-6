import './App.css'
import FooterSection from './components/FooterSection'
import GetStartedSection from './components/GetStartedSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SimpleTransparentPricingSection from './components/SimpleTransparentPricingSection'
import StateSection from './components/StateSection'


const threeDataFetch = async() => {
  const res = await fetch('/threeData.json');
  return res.json();
}
const threeDataPromise = threeDataFetch();

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <StateSection></StateSection>
      <GetStartedSection></GetStartedSection>


      <SimpleTransparentPricingSection threeDataPromise={threeDataPromise}></SimpleTransparentPricingSection>
      <FooterSection></FooterSection>
    </>
  )
}

export default App
