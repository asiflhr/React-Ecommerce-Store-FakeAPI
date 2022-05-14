import React, { useState, useEffect } from "react";
import "././products.css";
import "../../App.css";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);   
      const res = await fetch(`https://fakestoreapi.com/products`);   //fetching data from fake api
      setData(await res.json());
      setLoading(false);
    }
    getProduct();

  }, []);

  const Loading = () => {
    return(
      <h3>Loading...</h3>
    )
  }

  const ShowProducts = () => {    //show products
    return (
      <>
        {data.map((product) => (
          <div className="col-md-3 mb-4">
            <div className="card h-100 text-center p-4 pb-0" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                className="card-img-top"
              />
              <div className="card-body mb-0 pb-0">
                <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                <h3 className="card-price lead fw-bold">Price: ${product.price}</h3>
                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark mb-0">
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            {loading ? <Loading/> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
