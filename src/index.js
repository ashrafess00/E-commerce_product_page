import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import product1 from "./Images/image-product-1.jpg";
import product2 from "./Images/image-product-2.jpg";
import product4 from "./Images/image-product-4.jpg";
import product3 from "./Images/image-product-3.jpg";

//store
let item = {
  count: 0,
  price: 125.0,
  addedToCart: false,
  images: [product1, product2, product3, product4],
};

//reducer
const counter = (state = item, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "MIN":
      return { ...state, count: state.count - 1 };
    case "ADDTOCART":
      return { ...state, addedToCart: true };
    case "REMOVEFROMCART":
      return { ...state, addedToCart: false };
    default:
      return state;
  }
};

let store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
