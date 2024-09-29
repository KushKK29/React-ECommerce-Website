import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import TopProduct from "./Components/TopProduct/TopProduct";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonial/Testimonials";
import Footer from "./Components/Footer/Footer";
function App() {
  const [orderPopup, setorderPopup] = useState(false);

  const handelOrderPopup = () => {
    setorderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      offest: 100,
      duration: 300,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-black  dark:text-white duration-200">
        <Navbar handelOrderPopup={handelOrderPopup}></Navbar>
        <Hero handelOrderPopup={handelOrderPopup}></Hero>
        <Products></Products>
        <TopProduct handelOrderPopup={handelOrderPopup} />
        <Banner></Banner>
        <Subscribe></Subscribe>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
