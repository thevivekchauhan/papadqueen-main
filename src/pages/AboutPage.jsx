import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import chipsImage from "../assets/Chips.png";
import papad1Image from "../assets/papad1.jpg";
import PapadImage from "../assets/Papad.png";
import PickleImage from "../assets/Pickle.png";
import Frittersimage from "../assets/Fritters.png";
import "./AboutPage.css";

const AboutPage = () => {
  // Manually defined data for products
  const products = [
    // {
    //   id: 1,
    //   title: "Papad Queen",
    //   description: "Experience it today, and the taste will stay with you forever.",
    //   price: 300,
    //   category: "Chips",
    //   image: papad1Image,  
    // },
    {
      id: 2,
      title: "Papad King",
      description: "Crispy papad with a unique blend of spices. 250 ₹ per packet(1 KG)",
      price: 250,
      category: "Papad",
      image: PapadImage,
    },
    {
      id: 3,
      title: "Pickle",
      description: "Tangy and spicy mixed vegetable pickle.",
      price: 500,
      category: "Pickle",
      image: PickleImage,
    },
    {
      id: 4,
      title: "Fritters",
      description: "Delicious deep-fried fritters, crispy and hot.",
      price: 40,
      category: "Fritters",
      image: Frittersimage,
    },
    {
      id: 5,
      title: "Chips",
      description: "Crunchy potato chips with rich flavor.",
      price: 20,
      category: "Chips",
      image: chipsImage,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to Papad Queen, where tradition meets taste in every crispy bite! Our mission is to bring you the finest, most authentic papads made from carefully selected ingredients and age-old recipes. At Papad Queen, we believe in delivering a royal crunch that elevates every meal and satisfies your snack cravings.
          Handcrafted with love and dedication, our papads are sun-dried to perfection and free from preservatives, offering you a pure, wholesome experience. Whether you enjoy them as a snack, appetizer, or side dish, we promise a taste that transports you to the heart of tradition with every bite.
          Thank you for choosing Papad Queen—where every papad is fit for a queen!
        </p>

        <h2 className="text-center py-4">Trending Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 col-sm-6 py-3">
              <div className="card product-card">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><strong>Price: ₹{product.price}</strong></p>
                  <Link to={`/product/₹{product.id}`} className="btn btn-dark">
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
