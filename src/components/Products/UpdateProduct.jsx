import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const id = useParams();
  const pId = id.id;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${pId}`);
      setData(await res.json());
      setLoading(false);
    };
    getProduct();
  }, [pId]);


  const updateProductData = async () => {
    await fetch(`https://fakestoreapi.com/products/${pId}`, {
      method: "PUT",
      body: JSON.stringify({
        title: name,
        price: price,
        description: description,
        image: image,
        category: category,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));

    //   console.warn(  // print updated data to the console
    //   "Product Updated\n Name: " + name +
    //     "\n Price: " + price +
    //     "\n Image: " + image +
    //     "\n Category: " + category +
    //     "\n Description: " + description
    // );
  };

  return (
    <div className="container mt-5 mb-4">
      <div className="row">
        {loading && (
          <div>
            {" "}
            <h1>Loading...</h1>
          </div>
        )}

        <form>
          <div className="col-md-6 mb-xl-4">
            <img src={data.image} alt="#" height="300px" width="300px" />
            <input
              type="file"
              name="select file"
              id="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-4"
            />
          </div>

          <div className="col-md-6">
            <input type="text" defaultValue={data.category ? data.category:""} onChange={(e)=>setCategory(e.target.value)}  className="text-uppercase w-100 text-black-50 mt-3 px-lg-2"/> <br />
            <textarea rows={2} defaultValue={data.title ? data.title:""} onChange={(e)=>setName(e.target.value)} className="text-capitalize w-100 text-black-50 mt-3 px-lg-2"/> <br />
            <input type="text" defaultValue={data.price ? data.price:""} onChange={(e)=>setPrice(e.target.value)} className="text-capitalize w-100 text-black-50 mt-3 px-lg-2"/> <br />
            <textarea rows={5} defaultValue={data.description ? data.description:""} onChange={(e)=>setDescription(e.target.value)} className="text-capitalize w-100 text-black-50 mt-3 px-lg-2"/> <br />
            
            <button
              className="btn btn-success ms-2 px-3 py-2 mt-3"
              type="submit"
              onClick={() => updateProductData(data.pId)}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
