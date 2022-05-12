import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SingleProduct = () => {
  const id = useParams();
  const pId = id.id;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${pId}`);
      setData(await res.json());
      setLoading(false);
    };
    getProduct();
  }, [pId]);

  const Loading = () => {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  };

  const DeleteProduct = async () => {
    console.log("deleteProduct");
    await fetch(`https://fakestoreapi.com/products/${pId}`, {
      method: "DELETE",
    }).then(res=>res.json())
    .then(json=>console.log(json))
    window.location.href = "/products"; // redirect to products page
  }

  const Product = () => {
    return (
      <>
        <div className="col-md-6">
            <img src={data.image} alt="#" height="400px" width="400px" />
        </div>
        <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">
                {data.category}
            </h4>
            <h3>{data.title}</h3>
            <p className="lead fw-bolder">
                Rating: {data.rating && data.rating.rate}
            </p>
            <h3 className=" fw-bold-my-4">
                Price: ${data.price}
            </h3>
            <p className="lead">{data.description}</p>
            <NavLink to={`/products/updateID=${data.id}`} className="btn btn-outline-dark px-4 py-2">
                Update Item
            </NavLink>
            <button className="btn btn-danger ms-2 px-3 py-2" onClick={()=>DeleteProduct(data.pId)}>
                Delete Item
            </button>
        </div>
      </>
    );
  };

  return (
    <div className="container mt-3 mb-4">
      <div className="row">{loading ? <Loading /> : <Product />}</div>
    </div>
  );
};

export default SingleProduct;
