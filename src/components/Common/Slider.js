// src/components/Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useProductContext } from '../../context/ProductContext';
import "../../style/Slider.css"

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const {sliderProducts} = useProductContext();

  // console.log(JSON.stringify(sliderProducts)+"uuuuu");

  return (
    <div className="my-8">
      <Slider {...settings}>
        {sliderProducts.map((p)=>
        <div className='slidermist'>
        <img
        key={p.id} 
        src={p.image[0].url} 
        alt={p.image[0].filename} 
        className="w-full" 
        />
        </div>
        )}
      </Slider>
    </div>
  );
};

export default SliderComponent;
