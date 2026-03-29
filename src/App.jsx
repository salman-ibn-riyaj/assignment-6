import './App.css'
import FooterSection from './components/FooterSection'
import GetStartedSection from './components/GetStartedSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import StateSection from './components/StateSection'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <StateSection></StateSection>
      <GetStartedSection></GetStartedSection>

      <FooterSection></FooterSection>
    </>
  )
}

export default App
