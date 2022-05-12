import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HomeImage from "../../static/img/home.png";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        {/* left side */}
        <div className="col-sm-6 i-left">
          <h4>20% DISCOUNT ON</h4>
          <h1 className="big-text">Girl's Fashion</h1>
          <p className="newsDetail">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            facere eum et tenetur consequuntur non illo aut eveniet rerum
            dolore.
          </p>
          <Link to="products">
            <button className="homeBtn">Shop Now</button>
          </Link>
        </div>

        {/* ridht side */}
        <div className="col-sm-6">
          <div className="image-responsive right-side-content">
            <img src={HomeImage} alt="" className="mb-xl-0 " />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
