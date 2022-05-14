import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HomeImage from "../../static/img/home.png";

const Home = () => {
  return (
    <div className="homepage">
      <div className="i-left"> {/* left side */}
        <h4>20% DISCOUNT ON</h4>
        <h1 className="big-text">Girl's Fashion</h1>
        <p className="newsDetail">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet facere
          eum et tenetur consequuntur non illo aut eveniet rerum dolore.
        </p>
        <Link to="products">
          <button className="homeBtn">Shop Now</button>
        </Link>
      </div>
      <div className="i-right"> {/* ridht side */}
        <img src={HomeImage} alt="" className="homeImage" />
      </div>
    </div>
  );
};

export default Home;
