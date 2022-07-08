import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import axios from "axios"

var featuredProducts = [{"url":"loader", "alt":"Loader"}];
//  "imageSlide/Kisses.jpg",
//  "imageSlide/Nietzsche.jpg",
//  "imageSlide/Twoface.png",

async function getBanner(){
  const banner = await axios.get(process.env.BACKEND + 'banners2/listActive')
  //console.log(banner.data)
  featuredProducts = banner.data;
}

getBanner();

let count = 0;
let slideInterval;
export default function Slider(props) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 8000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative drop-shadow-xl ">
      <div className="aspect-w-16 aspect-h-9"> 
        <img src={"http://172.16.248.88:3333/images/" + featuredProducts[currentIndex].url} alt={featuredProducts[currentIndex].alt} className="banner w-full h-[15rem] sm:h-[30rem] lg:h-[40rem]"/>{/*  h-[35rem]*/}
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
}


