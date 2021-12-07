import React, { useState } from "react";
import Logo from "../Images/logo.svg";
import iconCart from "../Images/icon-cart.svg";
import iconBin from "../Images/icons/icon-delete.svg";

import avatar from "../Images/image-avatar.png";
import { useDispatch, useSelector } from "react-redux";
const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const { count, price, addedToCart, images } = useSelector((state) => state);

  const dispatch = useDispatch();

  if (clicked) {
    document.getElementById("overlay").style.display = "block";
  } else {
    try {
      document.getElementById("overlay").style.display = "none";
    } catch (e) {}
  }
  return (
    <header className="d-flex s-b ai-c">
      <div id="overlay"></div>
      <div className="d-flex gap-1">
        {/* icon  */}
        <div
          className={`humIcon icon ${clicked ? "clicked" : ""}`}
          onClick={() => setClicked(!clicked)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className={`menu ${clicked ? "show" : ""}`}>
          <nav>
            <ul className="mb-all-1 fw-700">
              <li>Collection</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="d-flex gap-1 ai-c">
        <div className="icon cartIcon" onClick={() => setOpenCart(!openCart)}>
          <div className={addedToCart ? "cartCount" : ""}>
            {addedToCart && count}
          </div>
          <img src={iconCart} alt="" />
        </div>
        <div className="ml-2 icon avatar">
          <img src={avatar} alt="" />
        </div>
      </div>

      <div className={`itemInCart ${openCart ? "open" : ""}`}>
        <div className="p-1 fw-700"> Cart </div>
        <hr />
        <div>
          {!addedToCart ? (
            <div className="cartIsEmpty">your cart is empty</div>
          ) : (
            <Cart
              count={count}
              price={price}
              image={images[0]}
              openCart={openCart}
              dispatch={dispatch}
            />
          )}
        </div>
      </div>
    </header>
  );
};

const Cart = (props) => {
  return (
    <div className="cartBox d-flex ai-c p-1">
      <div className="thumb">
        <img src={props.image} alt="" />
      </div>
      <div>
        <h4>Fall Limited Edition Sneakers</h4>
        <div>
          {props.price} x {props.count} <b>${props.price * props.count}</b>
        </div>
      </div>
      <div className="bin c-p">
        <img
          src={iconBin}
          className="bin"
          alt=""
          onClick={() => props.dispatch({ type: "REMOVEFROMCART" })}
        />
      </div>
    </div>
  );
};

export default NavBar;
