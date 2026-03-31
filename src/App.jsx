
import { Suspense } from 'react';
import Banner from './components/banner/Banner';
import Rating from './components/banner/Rating';
import NavBar from './components/navBar/NavBar';
import DigitalTools from './components/ui/DigitalTools';
import Models from './components/ui/Models';


const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {
  

  return (
    <>
      <NavBar />
      <Banner />
      <Rating />
      <DigitalTools />
      <Models modelPromise={modelPromise} />
    </>
  )
}

export default App
