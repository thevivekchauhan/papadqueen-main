import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import papad1Image from "../assets/papad1.jpg";
import chipsImage from "../assets/Chips.png";
import PapadImage from "../assets/Papad.png";
import PickleImage from "../assets/Pickle.png";
import Frittersimage from "../assets/Fritters.png";

const Products = () => {
  const [data] = useState([
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
      title: " Papad King",
      description: "Once you try it, the taste will linger in your mind. 250 ₹ per packet(1 KG)",
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
  ]);
  
  const [filter, setFilter] = useState(data);
  
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Chips")}
          >
            Chips चिप्स
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Papad")}
          >
            Papad's पापड़
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Pickle")}
          >
            Pickle अचार
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Fritters")}
          >
            Horn fritters सींग के पकोड़े
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">₹{product.price}</li>
                </ul>
                <div className="card-body">
                  <Link
                    to={"/product/" + product.id}
                    className="btn btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {filter.length === 0 ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
