import React from "react";

const CategoryBtn = ({img, name}) => {
  return (
    <div class="navegacion">
      <div class="navegacion-img">
        <img src={img} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default CategoryBtn;
