import React from 'react';

const ProductCard = ({product}) => {

    const {product_name, image_url, price, rating, brand, creation_date} = product;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                className='h-96'
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p className='font-bold'>{brand}</p>
                <p>Price: BDT {price}.00</p>
                <p>Rating: {rating}</p>
                <small>Date Added: {creation_date} </small>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;