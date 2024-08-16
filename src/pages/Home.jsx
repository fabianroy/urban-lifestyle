import Banner from "../components/Banner";

const Home = () => {

    const [products, setProducts] = useState([]);

    const useEffect = () => {
        fetch('https://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    return (
        <div>
            <Banner></Banner>
            <div className="m-6 bg-gray-100 p-4 flex justify-center items-center gap-2">
                {/* Category */}
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn bg-white m-1">Category</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>tshirts</a></li>
                        <li><a>jeans & pants</a></li>
                        <li><a>sneakers</a></li>
                        <li><a>hoodie & jackets</a></li>
                        <li><a>Adidas</a></li>
                        <li><a>Nike</a></li>
                        <li><a>Puma</a></li>
                        <li><a>Fabrilife</a></li>
                        <li><a>Other Brands</a></li>
                        <li><a>Below 500</a></li>
                        <li><a>Below 1000</a></li>
                        <li><a>Below 2000</a></li>
                        <li><a>Below 5000</a></li>
                        <li><a>Below 10000</a></li>
                        <li><a>Below 20000</a></li>
                        <li><a>Below 30000</a></li>
                    </ul>
                </div>
                {/* Sorting */}
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn bg-white m-1">Sort</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Price: Low to High</a></li>
                        <li><a>Price: High to Low</a></li>
                        <li><a>Newest Arrivals</a></li>
                    </ul>
                </div>
                {/* Search */}
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
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
        </div>
    );
};

export default Home;