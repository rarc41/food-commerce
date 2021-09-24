// import axios from "axios";

// this is for  connect with firebase
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    // the following statements view Cloud Firestore Docs (https://firebase.google.com/docs/firestore/quickstart?hl=es) 
    // section, Reading data
    const data = await getDocs(collection(db, "productos"));
    const products = [];
    data.forEach((doc) => {
      // console.log(doc.data());
      products.push(doc.data());
    });

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: products });
  } catch (error) {
      dispatch({ 
          type: PRODUCT_LIST_FAIL,
          payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        })
  }
};
