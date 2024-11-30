import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
import img1 from "../assets/Apple-pay.png";
import img2 from "../assets/g-pay.png";
import img3 from "../assets/paypal.png";
import { Link } from "react-router-dom";
export default function Cart() {
  const { isEmpty, totalUniqueItems, items, cartTotal, removeItem } = useCart();

  return (
    <div>
      <div className="cart-page">
        <div className="cart-items">
          <ul>
            <h2 className="cart-heading-title">
              Shopping Cart <i className="bx bxs-shopping-bag"></i>
            </h2>
            {!isEmpty &&
              items.map((item) => (
                <li key={item.id}>
                  <Link to={`/Shopping/${item.id}`}>
                    <div className="cart-img">
                      <img
                        src={item.images && item.images[0]}
                        alt={item.title}
                      />
                    </div>
                  </Link>
                  <div>
                    <h4>
                      <i className="bx bx-label"></i>
                      {item.quantity} X {item.title}
                    </h4>
                    {item.brand && (
                      <p>
                        <i className="bx bxs-component"> </i>
                        {item?.brand}
                      </p>
                    )}{" "}
                    <p>
                      <i className="bx bxs-star"></i>
                      {item?.rating}
                    </p>
                    <p>
                      <i className="bx bx-dollar"></i>
                      {item?.price}
                    </p>
                    <button
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: "Deleted!",
                              text: "Item has been deleted.",
                              icon: "success",
                              showConfirmButton: false,
                              timer: 750,
                            });
                            removeItem(item.id);
                          }
                        });
                      }}
                    >
                      <i className="bx bx-trash"></i>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            {isEmpty && <h1 style={{ color: "#fff" }}>No Items Available !</h1>}
          </ul>
        </div>
        <div className="cart-details">
          <div className="promo-code">
            <h4>Promo Code</h4>
            <div className="promo-form">
              <input type="text" placeholder="Add A Promo Code" />
              <input type="button" value={"Apply"} />
            </div>
          </div>
          <div className="cart-summary">
            <h4>Cart Summary</h4>
            <div>
              <div className="totals">
                <p>Available Item/s </p>
                <p>Subtotal</p>
                <p>Shipping</p>
                <p>Free Shipping Promo</p>
              </div>
              <div className="totals-prices">
                <p>{totalUniqueItems}</p>
                <p>${cartTotal}</p>
                <p>{cartTotal <= 20 ? "$9.99" : "$0.00"}</p>
                <p id="free-shipping">
                  {cartTotal <= 20 ? "-$9.99" : "-$0.00"}
                </p>
              </div>
            </div>
            <hr />
            <div className="total">
              <h4>Total Cost</h4>
              <h4>${cartTotal}</h4>
            </div>
          </div>
          <div className="cart-checkout">
            <h4>CheckOut</h4>
            <div>
              <button>
                Buy With
                <img src={img1} alt="payment" />
              </button>
              <button>
                Buy With
                <img src={img2} alt="payment" />
              </button>
              <button>
                Buy With
                <img src={img3} alt="payment" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
