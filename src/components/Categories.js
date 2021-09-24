import React, { Fragment, useState, useEffect } from "react";
import Burger from "../assets/icons/1046784.svg";
import Timer from "../assets/icons/149316.svg";
import Arrow from "../assets/icons/118740.svg";
import CategoryBtn from "./CategoryBtn";

// this component render the section with the category buttons section

const Categories = () => {
const [categories, setCategories] = useState([])

// get the data from categories.json 
  const getData = () => {
    fetch("categories.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((categories) => {
        setCategories(categories)

      });
  };

  
  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <div className="title">
        <div className="main-title">
          <h1>Restaurants</h1>
          <img className="title-hamburguesa" src={Burger} alt="hamburguesa" />
        </div>
        <div className="title-button">
          <img className="title-button-icon" src={Timer} alt="clock" />
          <p>
            Delivery: <span>Now</span>
          </p>
          <img className="title-button-icon" src={Arrow} alt="arrow down" />
        </div>
      </div>

      <div className="categoy-list">
        <div className="categoy-list-btns">
          {categories.map((category) => (
            <CategoryBtn
              key={category.id}
              img={category.icon}
              name={category.name}
            />
          ))}
        </div>
        <div className="right-btn">
          <img src={Arrow} alt="right arrow" />
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
