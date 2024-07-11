// import React, { useEffect, useRef } from "react";


// const cardDetails = {
//   0: {
//     imgUrl:
//       "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta1.jpg",
//     title: "Text 1",
//   },
//   1: {
//     imgUrl:
//       "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta2.jpg",
//     title: "Text 2",
//   },
//   2: {
//     imgUrl:
//       "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta3.jpg",
//     title: "Text 3",
//   },
//   3: {
//     imgUrl:
//       "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta4.jpg",
//     title: "Text 4",
//   },
//   4: {
//     imgUrl:
//       "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta5.jpg",
//     title: "Text 5",
//   },
//   5: {
//     imgUrl:
//       "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta6.jpg",
//     title: "Text 6",
//   },
// };

// function CarouselItem({ imgUrl, imgTitle }) {
//   return (
//     <div className="carousel-card">
//       <img src={imgUrl} alt={imgTitle}></img>
//     </div>
//   );
// }

// export default function AutoplayCarousel() {
//   const carouselTrackRef = useRef(null);

//   useEffect(() => {
//     const carouselTrack = carouselTrackRef.current;
//     let index = 0;
//     const totalItems = Object.keys(cardDetails).length;

//     const intervalId = setInterval(() => {
//       index = (index + 1) % totalItems;
//       const translateX = -index * 10; // assuming each item takes 100% width
//       carouselTrack.style.transform = `translateX(${translateX}%)`;
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(intervalId); // Clean up on component unmount
//   }, []);

//   return (
//     <div className="carousel-container">
//       <div className="carousel-track flex" ref={carouselTrackRef}>
//         {Object.keys(cardDetails).map((detailKey) => (
//           <CarouselItem
//             key={detailKey}
//             imgUrl={cardDetails[detailKey].imgUrl}
//             imgTitle={cardDetails[detailKey].title}
//           />
//         ))}
//         {Object.keys(cardDetails).map((detailKey) => (
//           <CarouselItem
//             key={`duplicate-${detailKey}`}
//             imgUrl={cardDetails[detailKey].imgUrl}
//             imgTitle={cardDetails[detailKey].title}
//           />
//         ))}
                                
//       </div>
//             </div>
            
//   );
// }
