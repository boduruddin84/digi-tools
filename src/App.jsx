
import { Suspense, useState } from 'react';
import Banner from './components/banner/Banner';
import Rating from './components/banner/Rating';
import NavBar from './components/navBar/NavBar';
import DigitalTools from './components/ui/DigitalTools';
import Products from './components/ui/Products';
import SelectedCart from './components/ui/SelectedCart';


const getModels = async () => {
  const res = await fetch("/products.json");
  return res.json();
}

const productPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);
  console.log(carts);
  

  return (
    <>
      <NavBar />
      <Banner />
      <Rating />
      <DigitalTools setActiveTab={setActiveTab} />
      {activeTab === "product" && <Products productPromise={productPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === "cart" && <SelectedCart carts={carts} />}
    </>
  )
}

export default App
