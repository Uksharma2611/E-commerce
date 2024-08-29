import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";

const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  return (
    <Layout title={"Search results"}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length} results`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div
                key={p._id}
                className="card m-2"
                style={{ width: "20rem", cursor: "pointer" }}
                onClick={() => navigate(`/product/${p.slug}`)}
              >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> Rs.{p.price}</p>
                  <button className="btn btn-primary ms-1">More Details</button>
                  <button className="btn btn-secondary ms-1">ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="btn-arrow"
          onClick={() => navigate("/")}
        >
          &larr;
        </button>

        <style jsx>{`
          .btn-arrow {
            color: black;  
            background-color: #eeeaea; /* Light gray background */
            border: none;
            padding: 8px 16px;
            border-radius: 8px;  /* Rounded small edges */
            position: absolute;
            left: 10px;  /* Adjust as needed for positioning */
            top: 20px;   /* Adjust as needed for positioning */
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
          }

          .btn-arrow:hover {
            color: #2874f0;  /* Blue color on hover */
            background-color: #eeeaea; /* Keep the same background color on hover */
            transform: none; /* Remove the scaling effect */
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Search;
