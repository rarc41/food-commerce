import React from "react";

const CategoryBtn = ({img, name}) => {
  return (
    <div class="btn-category">
      <div class="btn-category-img">
        <img src={img} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default CategoryBtn;
