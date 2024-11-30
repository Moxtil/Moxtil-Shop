import React, { useState } from "react";
import img1 from "../assets/ps5Cont.png";
import img2 from "../assets/mouse.png";
import img3 from "../assets/newHeadphones.png";
import img4 from "../assets/qq.png";
import { Link } from "react-router-dom";
import UnderHomeItem from "./underHomeItem";
import offers1 from "../assets/2.png";
import offers2 from "../assets/1.png";
import offers3 from "../assets/3.png";
export default function UnderHome() {
  const [offerImg, setOfferImg] = useState("");
  return (
    <>
      <div className="offers">
        <div className="offers-phrases">
          <h2>Another chance to enjoy big savings.</h2>
          <p>Incredible sale for incredible people.</p>
          <Link to={"/Shopping"}>
            <button>Buy Now</button>
          </Link>
        </div>
        <div className="offers-img">
          <img src={offerImg === "" ? offers1 : offerImg} alt="Big Sales" />
        </div>
      </div>
      <div className="offers-items-imgs">
        <img src={offers1} alt="1" onClick={() => setOfferImg(offers1)} />
        <img src={offers2} alt="2" onClick={() => setOfferImg(offers2)} />
        <img src={offers3} alt="3" onClick={() => setOfferImg(offers3)} />
      </div>
      <h1
        style={{
          textAlign: "center",
          marginBlock: "30px",
          letterSpacing: "2px",
          fontFamily: "Edu AU VIC WA NT Pre",
          color: "gold",
        }}
      >
        More And More{" "}
      </h1>
      <div className="underHome">
        <UnderHomeItem
          imgSrc={img1}
          title="A Diamond is Forever"
          brand="SONY"
          price="99"
          rate="4.3"
        />
        <UnderHomeItem
          imgSrc={img2}
          title="Just Do It"
          brand="GXT"
          price="59"
          rate="4.0"
        />
        <UnderHomeItem
          imgSrc={img3}
          title="The Real Thing"
          brand="BEATS"
          price="89"
          rate="4.8"
        />
        <UnderHomeItem
          imgSrc={img4}
          title="Think Different"
          brand="SAMSUNG"
          price="139"
          rate="4.2"
        />
      </div>
    </>
  );
}
