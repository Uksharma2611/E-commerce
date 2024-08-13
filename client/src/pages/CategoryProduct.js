import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/cart";
import { toast } from "react-toastify";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);

  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Add to Cart
  const addToCart = (product) => {
    let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Create a new cart item for each addition
    const newCartItem = { ...product, quantity: 1 };
    existingCart.push(newCartItem);
    
    // Update the cart state with the new quantity
    setCart(existingCart);
    localStorage.setItem("cart", JSON.stringify(existingCart)); // Persist the cart in local storage
    toast.success("Item added to cart");
  };

  return (
    <Layout>
      <div className="container mt-3 category">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center mb-4">{products?.length} result found</h6>
        <div className="row">
          {products?.map((p) => (
            <div className="col-md-4 mb-4" key={p._id}>
              <div className="card h-100">
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  style={{ objectFit: 'contain', height: '250px' }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </h5>
                  </div>
                  <p className="card-text mb-3 flex-grow-1">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-info"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-dark"
                      onClick={() => addToCart(p)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
