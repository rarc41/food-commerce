import React from "react";

const CategoryBtn = ({img, name}) => {
  return (
    <div className="btn-category">
      <div className="btn-category-img">
        <img src={img} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default CategoryBtn;
