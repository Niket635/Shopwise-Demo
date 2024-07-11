import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import ReactSimplyCarousel from "react-simply-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImag from "./Carousel";
import { CiDeliveryTruck } from "react-icons/ci";

const arr = [
  {
    img: "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_img1.jpg",
    name: "Enim Expedita Sed",
    sprays: "$45.00",
    Delsprays: "$55.25",
    item: "21",
  },
  {
    img: "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_img2.jpg",
    name: "Adipisci Officia Libero",
    sprays: "$55.00",
    Delsprays: "$95.00",
    item: "15",
  },
  {
    img: "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_img3.jpg",
    name: "Internet Tend To Repeat",
    sprays: "$68.00",
    Delsprays: "$99.00",
    item: "25",
  },
  {
    img: "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_img4.jpg",
    name: "Many Desktop Publishing",
    sprays: "$69.00",
    Delsprays: "$89.00",
    item: "22",
  },
  {
    img: "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_img5.jpg",
    name: "Injected Humour Repetition",
    sprays: "$45.00",
    Delsprays: "$55.25",
    item: "21",
  },
  {
    img: "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_img6.jpg",
    name: "Randomised Humour Words",
    sprays: "$55.00",
    Delsprays: "$95.00",
    item: "15",
  },
  {
    img: "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_img7.jpg",
    name: "Expedita Distinctio Rerum",
    sprays: "$68.00",
    Delsprays: "$99.00",
    item: "25",
  },
  {
    img: "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_img8.jpg",
    name: "Itaque Earum Rerum",
    sprays: "$45.00",
    Delsprays: "$89.00",
    item: "22",
  },
];

const items = [
  {
    backgroundImage:
      'url("https://bestwebcreator.com/shopwise/demo/assets/images/banner7.jpg")',
    width: "100%", // Example width, you can adjust as needed
    backgroundSize: "cover", // Ensure the image covers the whole div
    backgroundPosition: "center", // Center the image
    name: "Get up to 50% off Today Only!",
    item: "Wooden Chair Collection",
  },
  {
    backgroundImage:
      'url("https://bestwebcreator.com/shopwise/demo/assets/images/banner9.jpg")',
    width: "100%", // Example width, you can adjust as needed
    backgroundSize: "cover", // Ensure the image covers the whole div
    backgroundPosition: "center", // Center the image
    name: "Taking your Viewing Experience to Next Level",
    item: "Living Room Collection",
  },
  {
    backgroundImage:
      'url("https://bestwebcreator.com/shopwise/demo/assets/images/banner8.jpg")',
    width: "100%", // Example width, you can adjust as needed
    backgroundSize: "cover", // Ensure the image covers the whole div
    backgroundPosition: "center", // Center the image
    name: "NEW TRANDING",
    item: "Sofa Collection",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.",
  },
];

function Home() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <>
      <section>
        <div>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            transitionTime={500}
          >
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative lg:h-[650px] md:h-[500px] h-[350px] "
                  style={item}
                >
                  <div className="absolute lg:top-52 top-24 xl:left-64 md:left-10 left-10">
                    <div className="text-start w-[83.33%] md:w-[60%]">
                      <h5 className="capitalize text-black font-medium lg:text-xl text-base mb-sm-3 md:text-base flex-nowrap flex">
                        {item.name}
                      </h5>
                      <h1 className=" lg:text-7xl md:text-5xl font-bold my-2 text-gray-800">
                        {item.item}
                      </h1>
                      <p className="text-gray-500 font-serif md:mb-[30px] mb-0 mx-2">
                        {item.text}
                      </p>
                      <button className="font-medium font-sans border-solid border-2 border-gray-400 rounded-3xl text-red-600 relative md:h-[50px] px-6 py-2 w-40 overflow-hidden shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-red-600 hover:before:w-2/4 hover:before:bg-red-600 hover:after:w-2/4 hover:after:bg-red-600">
                        <span className="relative z-10">SHOP NOW</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>

      <section>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center container mx-auto lg:py-24 py-6 p-3">
          <div className="flex gap-5 xl:p-8 md:p-3 p-3 m-0 border-dashed border-2 lg:border-gray-400 border-red-400 ">
            <div>
              <CiDeliveryTruck className="text-red-600 lg:text-5xl text-4xl mt-2" />
            </div>
            <div>
              <h6 className="lg:text-xl lg:mb-2 mb-1 font-medium">
                Free Delivery
              </h6>
              <p className="lg:text-base font-serif text-gray-600">Worldwide</p>
            </div>
          </div>

          <div className="flex gap-5 xl:p-8 md:p-3 p-3 m-0 border-dashed border-2 lg:border-gray-400 border-red-400">
            <div>
              <CiDeliveryTruck className="text-red-600 lg:text-5xl text-4xl mt-2" />
            </div>
            <div>
              <h6 className="lg:text-xl lg:mb-2 mb-1 font-medium">
                Free Delivery
              </h6>
              <p className="lg:text-base font-serif text-gray-600">Worldwide</p>
            </div>
          </div>

          <div className="flex gap-5 xl:p-8 md:p-3 p-3 m-0 border-dashed border-2 lg:border-gray-400 border-red-400">
            <div>
              <CiDeliveryTruck className="text-red-600 lg:text-5xl text-4xl mt-2" />
            </div>
            <div>
              <h6 className="lg:text-xl lg:mb-2 mb-1 font-medium">
                Free Delivery
              </h6>
              <p className="lg:text-base font-serif text-gray-600">Worldwide</p>
            </div>
          </div>

          <div className="flex gap-5 xl:p-8 md:p-3 p-3 m-0 border-dashed border-2 lg:border-gray-400 border-red-400">
            <div>
              <CiDeliveryTruck className="text-red-600 lg:text-5xl text-4xl mt-2" />
            </div>
            <div>
              <h6 className="lg:text-xl lg:mb-2 mb-1 font-medium">
                Free Delivery
              </h6>
              <p className="lg:text-base font-serif text-gray-600">Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto p-5 lg:p-0">
          <h1 className="text-center font-bold sm:text-4xl text-2xl p-5 pt-0 lg:mb-5">
            Exclusive Products
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8">
            {arr.map((item) => {
              return (
                <>
                  <div className="w-[100%]">
                    <div className="border rounded-xl overflow-hidden text-center mb-3 ">
                      <div className="relative overflow-hidden ">
                        <img src={item.img} alt="alert" className="w-[100%]" />
                      </div>
                      <div className="h-auto text-center relative p-4 grid justify-center ">
                        <h1 className="text-center capitalize overflow-hidden whitespace-nowrap ">
                          {item.name}
                        </h1>
                        <h1 className="text-red-600 font-bold">
                          {item.sprays}
                          <del className="text-gray-400 font-thin mx-2">
                            <i>{item.Delsprays}</i>
                          </del>
                        </h1>
                        <div className="flex gap-2 justify-center">
                          <span className="flex mt-2">
                            <FaStar className="text-amber-300 text-sm" />
                            <FaStar className="text-amber-300 text-sm" />
                            <FaStar className="text-amber-300 text-sm" />
                            <FaStar className="text-amber-300 text-sm" />
                            <FaRegStar className="text-amber-300 text-sm" />
                          </span>
                          <span className=" text-gray-500">({item.item})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="pt-[50px] pb-[50px]">
            <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-6 ">
              <div className="relative overflow-hidden  sm:mb-0 mb-4 w-auto sm:w-full">
                <img
                  src="https://bestwebcreator.com/shopwise/demo/assets/images/furniture_banner1.jpg"
                  alt=""
                  className="h-full   object-cover"
                />
                <div className="absolute  md:top-4 top-1 p-4 left-4 z-[9]">
                  <h2 className="text-xl lg:text-2xl sm:text-xl">Super Sale</h2>
                  <h1 className="font-bold text-xl md:text-[22px] lg:text-[32px] mb-2">
                    New Collection
                  </h1>
                  <p className="md:text-xl">Shop Now</p>
                </div>
              </div>

              <div className="relative overflow-hidden ">
                <img
                  src="https://bestwebcreator.com/shopwise/demo/assets/images/furniture_banner2.jpg"
                  // className="hover:scale-105 hover:duration-300 overflow-hidden h-[100%] w-[100%]"
                  alt=""
                  className="h-[100%] w-[100%] object-cover"
                />
                <div className="absolute sm:top-[40%] top-[20%] p-4 md:p-4 md:left-4 left-0 w-[53%]">
                  <h3 className="font-bold text-xl md:text-[22px] lg:text-[32px] mb-2">
                    New Season
                  </h3>
                  <h4 className="font-medium lg:text-2xl sm:text-xl">
                    Sale 40% Off
                  </h4>
                  <p className="md:text-xl">Shop Now</p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-center font-bold lg:text-4xl text-lg">
            Trending Items
          </h1>
        </div>
      </section>

      <section>
        <div
          className="custom-carousel-container  lg:m-5 "
          style={{ position: "relative" }}
        >
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={1}
            itemsToScroll={1}
            forwardBtnProps={{
              children: (
                <span>
                  <FaArrowRight />
                </span>
              ),
              className: "custom-arrow custom-arrow--right",
            }}
            backwardBtnProps={{
              children: (
                <span className="top-0">
                  <FaArrowLeft />
                </span>
              ),
              className: "custom-arrow custom-arrow--left",
            }}
            responsiveProps={[
              {
                itemsToShow: 1,
                itemsToScroll: 1,
                minWidth: 400,
              },
              {
                itemsToShow: 2,
                itemsToScroll: 1,
                minWidth: 700,
              },
              {
                itemsToShow: 3,
                itemsToScroll: 1,
                minWidth: 1000,
              },
              {
                itemsToShow: 4,
                itemsToScroll: 1,
                minWidth: 1400,
              },
            ]}
            speed={400}
            easing="linear"
          >
            {arr.map((item) => {
              return (
                <div className="">
                  <div
                    className="border rounded-xl  md:m-0 xl:m-11 "
                    style={{ width: 320 }}
                  >
                    <div className="relative overflow-hidden">
                      <img src={item.img} alt="alert" />
                    </div>
                    <div className="h-auto text-center relative p-4 ">
                      <h1 className="text-center capitalize overflow-hidden whitespace-nowrap ">
                        {item.name}
                      </h1>
                      <h1 className="text-red-600 font-bold">
                        {item.sprays}
                        <del className="text-gray-400 font-thin mx-2">
                          <i>{item.Delsprays}</i>
                        </del>
                      </h1>
                      <div className="flex gap-2 justify-center">
                        <span className="flex mt-2">
                          <FaStar className="text-amber-300 text-sm" />
                          <FaStar className="text-amber-300 text-sm" />
                          <FaStar className="text-amber-300 text-sm" />
                          <FaStar className="text-amber-300 text-sm" />
                          <FaRegStar className="text-amber-300 text-sm" />
                        </span>
                        <span className=" text-gray-500">({item.item})</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </ReactSimplyCarousel>
        </div>
      </section>
      
      <section>
        <div className="my-8">
          <CarouselImag />
        </div>
      </section>
    </>
  );
}

export default Home;
