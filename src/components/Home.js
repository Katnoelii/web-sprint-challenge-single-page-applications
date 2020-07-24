import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return (
    <div className="homeContainer">
        <img src={require('../Assets/Pizza.jpg')} alt="pizza" />
      <Link to="./pizza">
        <button className="shop-btn" onClick={() => history.push("/pizza")}>
          Order Now!
        </button>
      </Link>
    </div>
  );
}