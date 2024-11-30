import React from "react";
import sofaImg from "../assets/sofa.png";
export default function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <p>Biggest Offer Revealed</p>
        <h1>MORE DEALS INSIDE UP TO %50 OFF !</h1>
        <button>
          Shop Now <i className="bx bx-chevrons-right"></i>
        </button>
      </div>
      <div className="home-right">
        <img src={sofaImg} alt="Sofa Offer" />
      </div>
    </div>
  );
}
