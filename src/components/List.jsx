import { useState } from "react";
import { useCart } from "react-use-cart";
import { useEffect } from "react";
import FilterButton from "./FilterButton";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function List() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const { addItem } = useCart();

  const addedItem = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Item Added Successfuly",
      showConfirmButton: false,
      timer: 750,
    });
  };
  const getData = async () => {
    try {
      setLoader(true);
      const req = await fetch("https://dummyjson.com/products");
      const res = await req.json();
      const response = res.products;
      setData(response);
      setProducts(response);
      setLoader(false);
    } catch {
      console.log("err");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filtItems = (cateItem) => {
    const updateItems = data.filter((curItem) => {
      return curItem.category === cateItem;
    });
    setProducts(updateItems);
  };

  return (
    <>
      <div className="filter-div" id="filtered">
        <div onClick={() => getData()}>
          <FilterButton title="All Products" />
        </div>
        <div onClick={() => filtItems("beauty")}>
          <FilterButton title="Beauty" />
        </div>
        <div onClick={() => filtItems("fragrances")}>
          <FilterButton title="Parfums" />
        </div>
        <div onClick={() => filtItems("furniture")}>
          <FilterButton title="Furniture" />
        </div>
        <div onClick={() => filtItems("groceries")}>
          <FilterButton title="Groceries" />
        </div>
      </div>

      {loader && <div className="loader"></div>}
      <div className="card-container">
        {products &&
          products.map((p) => (
            <div className="list-item" key={p.id}>
              <Link to={`/Shopping/${p.id}`}>
                <img src={p?.images[0]} alt={p?.title} />
              </Link>
              <div className="item-name">
                <span>
                  <i className="bx bx-label"></i>
                  {p?.title}
                </span>
                {p.brand && (
                  <p>
                    <i className="bx bxs-component"> </i>
                    {p?.brand}
                  </p>
                )}
              </div>
              <p className="item-price">${p?.price}</p>
              <p className="item-rate">
                <i className="bx bxs-star"> </i>
                <span> {p?.rating}</span>
              </p>
              <div className="card-buttons">
                <button
                  onClick={() => {
                    addItem(p);
                    addedItem();
                  }}
                >
                  <i className="bx bxs-cart-add"></i> Add to cart
                </button>
                <Link to={`/Shopping/${p.id}`}>
                  <button>More Details</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
