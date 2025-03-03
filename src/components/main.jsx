import React from "react";
import thirdImage from "../assets/3rd.jpg"; // Keep this image for the Sweet and Savory Papads card
import "./main.css";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={thirdImage}
                alt="Card3"
                height={430}
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fs-1 text fw-lighter hover-effect">Papad Queen: The Royal Crunch of Authentic, Homemade Papads! </h5>
                {/* <p className="fs-5 hover-effect">
                🌾 Crispy Homemade Papad
                   Delight in the crispy goodness of our freshly made papads, crafted from the finest lentils and spices. Perfect as a snack, side dish, or appetizer, they offer an authentic flavor and crunch. Made without preservatives, these papads are sun-dried to perfection, ensuring every bite is full of flavor. Enjoy them fried or roasted for a tasty treat!
                 </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;











// import React from "react";
// import firstImage from "../assets/1st.jpg";
// import secondImage from "../assets/2nd.jpg";
// import thirdImage from "../assets/3rd.jpg"; // Fixed typo here
// import fourthImage from "../assets/4th.jpg";
// import "./main.css";


// const Home = () => {
//   return (
//     <>
//       <div className="hero border-1 pb-3">
//         <div
//           id="carouselExample"
//           className="carousel slide"
//           data-bs-ride="carousel"
//           data-bs-interval="3000"
//         >
//           <div className="carousel-inner">
//             {/* First Slide */}
//             <div className="carousel-item active">
//               <img
//                 className="d-block w-100"
//                 src={firstImage}
//                 alt="Card"
//                 height={580}
//                 style={{ objectFit: "cover" }}
//               />
//               <div className="carousel-caption d-none d-md-block">
//                 <h5 className="fs-1 text fw-lighter hover-effect">
//                   Papad Queen: The Royal Crunch of Authentic, Homemade Papads!
//                 </h5>
//                 <p className="fs-5 hover-effect">
//                   🌾 Crispy Homemade Papad
//                   Delight in the crispy goodness of our freshly made papads, crafted from the finest lentils and spices. Perfect as a snack, side dish, or appetizer, they offer an authentic flavor and crunch. Made without preservatives, these papads are sun-dried to perfection, ensuring every bite is full of flavor. Enjoy them fried or roasted for a tasty treat!
//                 </p>
//               </div>
//             </div>

//             {/* Second Slide */}
//             <div className="carousel-item">
//               <img
//                 className="d-block w-100"
//                 src={secondImage}
//                 alt="Card2"
//                 height={500}
//                 style={{ objectFit: "cover" }}
//               />
//               <div className="carousel-caption d-none d-md-block">
//                 <h5 className="fs-1 text fw-lighter hover-effect">Papad Variety for Every Taste!</h5>
//                 <p className="fs-5 hover-effect">
//                   🌶️ Spicy Papads
//                   Enjoy our spicy variation of papads, infused with the right balance of spices and herbs. Perfect for those who love a bit of heat with their crunch, these papads are sure to excite your taste buds. Whether you fry or roast them, they pack a punch in every bite!
//                 </p>
//               </div>
//             </div>

//             {/* Third Slide */}
//             <div className="carousel-item">
//               <img
//                 className="d-block w-100"
//                 src={thirdImage}
//                 alt="Card3"
//                 height={500}
//                 style={{ objectFit: "cover" }}
//               />
//               <div className="carousel-caption d-none d-md-block">
//                 <h5 className="fs-1 text fw-lighter hover-effect">Sweet and Savory Papads!</h5>
//                 <p className="fs-5 hover-effect">
//                   🍬 Sweet Papads
//                   Indulge in our sweet papads, a delightful treat for those with a sweet tooth. Made with a perfect blend of sugar and spices, these papads offer a unique twist on a traditional snack. Enjoy them as a dessert or with a cup of tea!
//                 </p>
//               </div>
//             </div>

//             {/* Fourth Slide */}
//             <div className="carousel-item">
//               <img
//                 className="d-block w-100"
//                 src={fourthImage}
//                 alt="Card4"
//                 height={500}
//                 style={{ objectFit: "cover" }}
//               />
//               <div className="carousel-caption d-none d-md-block">
//                 <h5 className="fs-1 text fw-lighter hover-effect">Papad Snacks for Every Occasion!</h5>
//                 <p className="fs-5 hover-effect">
//                   🥨 Papad Mix
//                   Our papad mix is perfect for any occasion. Whether it's a party, a picnic, or just a snack, this variety pack includes different flavors and textures to suit all your cravings. Share the joy of crispy papads with family and friends!
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Carousel Controls */}
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExample"
//             data-bs-slide="prev"
//           >
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExample"
//             data-bs-slide="next"
//           >
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



