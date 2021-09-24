import React, { Fragment } from "react";
import Burger from "../assets/icons/1046784.svg";
import Timer from "../assets/icons/149316.svg";
import Arrow from "../assets/icons/118740.svg";
import CategoryBtn from "./CategoryBtn";

// this component render the section with the category buttons section

const Categories = () => {
  let categories = [
    {
      id: 1,
      name: "All",
      icon: "https://image.flaticon.com/icons/svg/701/701965.svg",
    },
    {
      id: 2,
      name: "Pizza",
      icon: "https://image.flaticon.com/icons/svg/599/599995.svg",
    },
    {
      id: 3,
      name: "Asian",
      icon: "https://image.flaticon.com/icons/svg/1895/1895684.svg",
    },
    {
      id: 4,
      name: "Burgers",
      icon: "https://image.flaticon.com/icons/svg/883/883806.svg",
    },
    {
      id: 5,
      name: "Barbecue",
      icon: "https://image.flaticon.com/icons/svg/933/933310.svg",
    },
    {
      id: 6,
      name: "Dessers",
      icon: "https://image.flaticon.com/icons/svg/174/174394.svg",
    },
    {
      id: 7,
      name: "Thai",
      icon: "https://image.flaticon.com/icons/svg/135/135367.svg",
    },
    {
      id: 8,
      name: "Sushi",
      icon: "https://image.flaticon.com/icons/svg/1900/1900683.svg",
    },
  ];

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
            {categories.map((category)=> (
                <CategoryBtn key={category.id} img={category.icon} name={category.name}/>
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
