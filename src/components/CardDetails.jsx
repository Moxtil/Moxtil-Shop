import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function CardDetails() {
  const [products, setProducts] = useState([]);

  const myParams = useParams();
  const myProduct = products[myParams.product - 1];
  const getData = async () => {
    try {
      const req = await fetch(`https://dummyjson.com/products`);
      const res = await req.json();
      const response = res.products;
      setProducts(response);
    } catch {
      alert("Products Not Found !");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const [mainImg, setMainImg] = useState("");

  return (
    <>
      <div
        className="card-show"
        style={
          myProduct?.stock > 20
            ? { background: "#402a23" }
            : { background: "#fdffcd" }
        }
      >
        <div className="card-det-img">
          <div className="share-like">
            <i className="bx bxs-share-alt"></i>
            <i className="bx bx-heart"></i>
          </div>
          <img
            src={mainImg === "" ? myProduct?.images[0] : mainImg}
            alt={myProduct?.title}
          />
          <div className="more-images">
            {myProduct?.images.length > 1 &&
              myProduct?.images.map((im) => {
                return (
                  <img
                    key={myProduct.id}
                    onClick={() => {
                      setMainImg(im);
                    }}
                    src={im}
                    alt={myProduct?.title}
                  />
                );
              })}
          </div>
        </div>
        <div className="card-info">
          <h2>{myProduct?.title}</h2>
          <h6 className="item-brand">{myProduct?.brand}</h6>
          <p>{myProduct?.description}</p>
          <h1>$ {myProduct?.price}</h1>
          <span>{myProduct?.stock} Left in Stock</span>
          <h3>
            <i className="bx bxs-star"></i>
            {myProduct?.rating}
          </h3>
          <button>
            Add To Cart <i className="bx bxs-cart-add"></i>
          </button>
        </div>
      </div>
      <h2 id="reviews-title">Reviews</h2>
      <div className="reviews">
        {myProduct?.reviews &&
          myProduct?.reviews.map((re) => {
            return (
              <div className="review">
                <div>
                  {<i className="bx bxs-star"></i>} {re?.rating}.0
                </div>
                <div>
                  <p>
                    <i className="bx bx-time"></i> {re?.date}
                  </p>
                </div>
                <div>
                  <p>
                    <i className="bx bx-user-circle"></i> {re?.reviewerName}
                  </p>
                </div>
                <div style={{ color: "#000" }}>
                  {" "}
                  <i className="bx bxs-comment-detail"></i>
                  {re?.comment}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
