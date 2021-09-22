import React from 'react';
import StarIcon from '../assets/icons/149220.svg'

const Product = ({product}) => {

    const {name, image, price, qualification, time} = product;
    return (
        <div class="producto">
            <div class="producto-img">
                <img
                    src={image}
                    alt={name}
                />
                <div class="producto-tiempo">{time}</div>
            </div>
            <h3>{name}</h3>
            <div class="puntuacion">
                <img src={StarIcon} alt="Star" />
                <div class="precio">
                    <span>{qualification}</span>Deli &bull; Bagels &bull; $$
                </div>
            </div>
        </div>
    );
};

export default Product;