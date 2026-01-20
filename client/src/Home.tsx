import React from 'react'
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';
import Services from './components/Services';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection myData={"MK Store"} />
      <Services />
      <Trusted />
    </>)

}
export default Home