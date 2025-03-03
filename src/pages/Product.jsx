import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Footer, Navbar } from "../components";
import papad1Image from "../assets/papad1.jpg";
import chipsImage from "../assets/Chips.png";
import PapadImage from "../assets/Papad.png";
import PickleImage from "../assets/Pickle.png";
import Frittersimage from "../assets/Fritters.png";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Manually defined data
  const data = [
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

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const productId = parseInt(id);
    const foundProduct = data.find((item) => item.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setLoading(false);
    } else {
      setLoading(false); // Handle case when product is not found
    }
  }, [id]);

  const Loading = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 py-3">
          <Skeleton height={400} width={400} />
        </div>
        <div className="col-md-6 py-5">
          <Skeleton height={30} width={250} />
          <Skeleton height={90} />
          <Skeleton height={40} width={70} />
          <Skeleton height={50} width={110} />
          <Skeleton height={120} />
          <Skeleton height={40} width={110} inline={true} />
          <Skeleton className="mx-3" height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            width="400px"
            height="400px"
          />
        </div>
        <div className="col-md-6 col-md-6 py-5">
          <h4 className="text-uppercase text-muted">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">Rating: 4.5 <i className="fa fa-star"></i></p>
          <h3 className="display-6  my-4">₹{product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark mx-3">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
