import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id) => async (dispatch, getState) => {
  const productsRef = collection(db, "productos");
  const q = query(productsRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  let product =''
  querySnapshot.forEach((doc) => {
    product=doc.data()
  });

  dispatch({
      type: CART_ADD_ITEM,
      payload: {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          qty:1
      }
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};

export const removeFromCart = (item) =>(dispatch, getState)=> {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: item
  })
}
