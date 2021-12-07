import React, { memo, useEffect, useState, useRef } from "react";

import nextIcon from "../Images/icons/icon-next.svg";
import previousIcon from "../Images/icons/icon-previous.svg";

import minIcon from "../Images/icons/icon-minus.svg";
import plusIcon from "../Images/icons/icon-plus.svg";

import { useDispatch, useSelector } from "react-redux";

const BuySection = () => {
  const [itemIdx, setItemIdx] = useState(0);

  const count = useSelector((state) => state.count);
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();

  const zoomCon = useRef(null);
  const overlay = useRef(null);

  useEffect(() => {
    let product = document.querySelectorAll(".productImgs");
    product.forEach((e) => {
      e.classList.remove("show");
      e.classList.add("hide");
    });
    product[itemIdx].classList.remove("hide");
    product[itemIdx].classList.add("show");
  }, [itemIdx]);

  let clicked = false;
  const zoom = () => {
    if (!clicked && window.innerWidth > 1000) {
      zoomCon.current.style.display = "block";
      overlay.current.style.display = "block";
    }
  };

  const closeZoom = () => {
    zoomCon.current.style.display = "none";
    overlay.current.style.display = "none";
  };

  return (
    <section className="buySection">
      <div id="overlay" ref={overlay}></div>

      {/* this element displays when you click to the main product */}
      <div id="displayZoomProducts" ref={zoomCon}>
        <div className="zoomCon" ref={zoomCon}>
          <div className="mainImg">
            <div
              className="arrow-zoom"
              onClick={() => setItemIdx(itemIdx !== 3 ? itemIdx + 1 : 0)}
            >
              <img src={nextIcon} alt="" />
            </div>
            <div
              className="arrow-zoom"
              onClick={() => setItemIdx(itemIdx !== 0 ? itemIdx - 1 : 3)}
            >
              <img
                src={previousIcon}
                alt=""
                onClick={() => setItemIdx(itemIdx !== 0 ? itemIdx - 1 : 3)}
              />
            </div>

            <div>
              <div className="sin" onClick={() => closeZoom()}></div>
              <img src={images[itemIdx]} alt="" />
            </div>
          </div>
          <Products images={images} setItemIdx={setItemIdx} />
        </div>
      </div>

      <div className="products ">
        <div
          className="arrow"
          onClick={() => setItemIdx(itemIdx !== 3 ? itemIdx + 1 : 0)}
        >
          <img src={nextIcon} alt="" />
        </div>
        <div
          className="arrow d-flex "
          onClick={() => setItemIdx(itemIdx !== 0 ? itemIdx - 1 : 3)}
        >
          <img src={previousIcon} alt="" />
        </div>

        <div className="zoomCon">
          <div className="mainImg" onClick={() => zoom()}>
            <div>
              <img src={images[itemIdx]} alt="" />
            </div>
          </div>
          <Products
            images={images}
            setItemIdx={setItemIdx}
            products1={"products1"}
          />
        </div>
      </div>

      <div className="secondSec p-2 mb-all-1">
        <h4 className="primary-color">SNEAKER COMPANY</h4>
        <h2>Fall Limited Edition Sneaker</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          placeat beatae ipsam, repellendus temporibus ipsum veritatis dolorem
          distinctio sint vel aliquam error accusamus quo officiis. Voluptatem
          sunt velit quas excepturi?
        </p>

        <div className="d-flex">
          <div className="fw-700 mr-1 fs-2">$125.00</div>
          <div className="discount fw-700">50%</div>
          <div className="discountPrice">
            <s>$250.00</s>
          </div>
        </div>

        <div className="boxes">
          <div className="box-grey d-flex s-b ai-c">
            <img
              src={minIcon}
              alt=""
              className="icon"
              onClick={() => (count != 0 ? dispatch({ type: "MIN" }) : null)}
            />
            <div>{count}</div>
            <img
              src={plusIcon}
              alt=""
              className="icon"
              onClick={() => dispatch({ type: "ADD" })}
            />
          </div>
          <div className="box" onClick={() => dispatch({ type: "ADDTOCART" })}>
            add To Cart
          </div>
        </div>
      </div>
    </section>
  );
};

const Products = (props) => {
  return (
    <div className={`productsCon ${props.products1}`}>
      {props.images.map((img, idx) => {
        return (
          <img
            src={img}
            className="productImgs c-p "
            alt="sneaker"
            key={Date.now() + Math.random(0, 5)}
            onClick={() => props.setItemIdx(idx)}
          />
        );
      })}
    </div>
  );
};

export default BuySection;
