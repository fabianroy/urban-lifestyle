import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const productInfo = useLoaderData();
    const {product_name, image_url, price, rating, brand, creation_date, description, category} = productInfo;
    console.log(productInfo);
    
    document.title = `${product_name} | Details`;

    return (
        <div className="w-fit mx-auto">
            <div className="card bg-base-100 m-6 md:m-0 md:w-96 shadow-xl">
                <figure>
                    <img
                        className='h-96'
                        src={image_url}
                        alt={product_name} />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold">{product_name}</h2>
                    <p className='font-bold'>Brand: <span className="text-blue-600 font-normal">{brand}</span></p>
                    <p><b>Category:</b> {category}</p>
                    <p><b>Product Description:</b> {description}</p>
                    <hr />
                    <p className="font-semibold">Price: BDT {price}.00</p>
                    <p>Rating: {rating}</p>
                    <small>Date Added: {creation_date} </small>
                    <br />
                    <Link className="btn bg-gray-800 text-white" to='/'>Back</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;