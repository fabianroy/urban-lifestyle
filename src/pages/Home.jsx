import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    // Update filteredProducts based on filters
    const applyFilters = (filterFunction) => {
        const result = filterFunction(products);
        setFilteredProducts(result);
    };

    // category filter by category
    const categoryFilter = (category) => {
        applyFilters(products => products.filter(product => product.category === category));
    };

    // category filter by brand
    const brandFilter = (brand) => {
        applyFilters(products => products.filter(product => product.brand === brand));
    };

    // category filter by price range
    const priceFilter = (price) => {
        applyFilters(products => products.filter(product => product.price <= price));
    };

    // sort by price low to high
    const priceLowtoHigh = () => {
        applyFilters(products => [...products].sort((a, b) => a.price - b.price));
    };

    // sort by price high to low
    const priceHightoLow = () => {
        applyFilters(products => [...products].sort((a, b) => b.price - a.price));
    };

    // sort by newest arrivals by date
    const newestArrivals = () => {
        applyFilters(products => [...products].sort((a, b) => new Date(b.date) - new Date(a.date)));
    };

    // search by product name, brand, category without case sensitivity and clicking search button
    const searchFilter = (search) => {
        applyFilters(products => products.filter(product => {
            return product.product_name.toLowerCase().includes(search.toLowerCase()) ||
                product.brand.toLowerCase().includes(search.toLowerCase()) ||
                product.category.toLowerCase().includes(search.toLowerCase());
        }));
    }

    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* Search & Filter */}
            <div className="m-6 bg-gray-100 p-4 flex justify-center items-center gap-2">
                {/* Category */}
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn bg-white m-1">Category</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a onClick={() => categoryFilter('tshirt')}>Tshirts</a></li>
                        <li><a onClick={() => categoryFilter('jeans & pants')}>Jeans & Pants</a></li>
                        <li><a onClick={() => categoryFilter('sneakers')}>Sneakers</a></li>
                        <li><a onClick={() => categoryFilter('hoodie & jackets')}>Hoodie & Jackets</a></li>
                        <li><a onClick={() => brandFilter('Adidas')}>Adidas</a></li>
                        <li><a onClick={() => brandFilter('Nike')}>Nike</a></li>
                        <li><a onClick={() => brandFilter('Puma')}>Puma</a></li>
                        <li><a onClick={() => brandFilter('Fabrilife')}>Fabrilife</a></li>
                        <li><a onClick={() => brandFilter('Deshal')}>Other Brands</a></li>
                        <li><a onClick={() => setFilteredProducts(products)}>All</a></li>
                        <li><a onClick={() => priceFilter(500)}>Price: Below 500</a></li>
                        <li><a onClick={() => priceFilter(1000)}>Price: Below 1000</a></li>
                        <li><a onClick={() => priceFilter(2000)}>Price: Below 2000</a></li>
                        <li><a onClick={() => priceFilter(5000)}>Price: Below 5000</a></li>
                        <li><a onClick={() => priceFilter(10000)}>Price: Below 10000</a></li>
                        <li><a onClick={() => priceFilter(20000)}>Price: Below 20000</a></li>
                        <li><a onClick={() => priceFilter(30000)}>Price: Below 30000</a></li>
                    </ul>
                </div>
                {/* Sorting */}
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn bg-white m-1">Sort</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a onClick={priceLowtoHigh}>Price: Low to High</a></li>
                        <li><a onClick={priceHightoLow}>Price: High to Low</a></li>
                        <li><a onClick={newestArrivals}>Newest Arrivals</a></li>
                    </ul>
                </div>
                {/* Search */}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => searchFilter(e.target.value)}
                        className="w-64" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>

            {/* Products */}
            <div className="max-w-screen-xl mx-auto md:grid grid-cols-3 gap-4">
                {
                    filteredProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>

        </div>
    );
};

export default Home;
