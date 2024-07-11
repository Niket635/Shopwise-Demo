import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

function CarouselImag() {
  const img = [
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta1.jpg",
    },
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta2.jpg",
    },
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta3.jpg",
    },
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta4.jpg",
    },
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta5.jpg",
    },
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta6.jpg",
    },
  ];

  const imglogo = [
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/cl_logo1.png",
    },
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/cl_logo2.png",
    },
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/cl_logo3.png",
    },
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/cl_logo4.png",
    },
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/cl_logo5.png",
    },
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/cl_logo6.png",
    },
    {
      imgUrl:
        "https://bestwebcreator.com/shopwise/demo/assets/images/cl_logo7.png",
    },

  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },

      items: 6,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      
    <div className="py-12 ">
      <Carousel autoPlay infinite={true} responsive={responsive} arrows={false}>
        {img.map((item) => {
          return (
            <>
              <div className="overflow-hidden ">
                <img
                  src={item.imgUrl}
                  alt=""
                  className="w-full h-full  object-cover transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                />
              </div>
            </>
          );
        })}
      </Carousel>
    </div>

        <div className="container mx-auto py-24">
      <Carousel autoPlay infinite={true} responsive={responsive} arrows={false}>
        {imglogo.map((item) => {
          return (
            <>
              <div className="overflow-hidden ">
                <img
                  src={item.imgUrl}
                  alt="aaaa"
                  className="h-full  object-cover opacity-70 w-[163px] m-auto hover:opacity-100"
                />
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
</>

  );
}

export default CarouselImag;
