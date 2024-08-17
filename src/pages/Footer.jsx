const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-16">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                {/* Brand Name */}
                <div className="col-span-1">
                    <h2 className="text-2xl font-bold mb-4">Urban Lifestyles</h2>
                    <p className="text-gray-400">
                        Your go-to destination for fashion-forward clothing and lifestyle products.
                    </p>
                </div>
                
                {/* Types of Products */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Products</h3>
                    <ul className="space-y-2">
                        <li>T-Shirts</li>
                        <li>Jeans & Pants</li>
                        <li>Sneakers</li>
                        <li>Hoodies & Jackets</li>
                        <li>Accessories</li>
                        <li>Casual Wear</li>
                    </ul>
                </div>
                
                {/* Brand Names */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Brands</h3>
                    <ul className="space-y-2">
                        <li>Nike</li>
                        <li>Adidas</li>
                        <li>Puma</li>
                        <li>Fabrilife</li>
                        <li>Deshal</li>
                        <li>Urban Classics</li>
                    </ul>
                </div>
                
                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M24 4.56v15.11A4.34 4.34 0 0119.67 24H4.33A4.34 4.34 0 010 19.67V4.33A4.34 4.34 0 014.33 0h15.34A4.34 4.34 0 0124 4.33zm-5.08 2.58a2.21 2.21 0 00-2.21 2.21v1.44h3.69l-.48 3.72h-3.21V24h-4.44v-9.08h-3V11.5h3v-2.41a4.89 4.89 0 015-5.29 27.62 27.62 0 013.06.16V7.14z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M22.46 6c-.8.35-1.67.59-2.58.7A4.56 4.56 0 0021.88 4c-.88.51-1.85.88-2.89 1.07A4.52 4.52 0 0016.5 4c-2.5 0-4.53 2.01-4.53 4.5 0 .35.04.69.1 1.02C8.44 9.37 5.76 7.69 4.01 5.07a4.5 4.5 0 00-.61 2.27 4.48 4.48 0 002.02 3.74A4.52 4.52 0 013.9 10v.05a4.5 4.5 0 003.63 4.41 4.53 4.53 0 01-2.04.08A4.5 4.5 0 007.9 17.91a9.08 9.08 0 01-5.61 1.93c-.36 0-.71-.02-1.06-.06a12.81 12.81 0 006.93 2.03c8.31 0 12.86-6.88 12.86-12.86v-.58A9.3 9.3 0 0024 5.54a9.03 9.03 0 01-2.54.7z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M12 2.04c-5.52 0-9.96 4.44-9.96 9.96 0 4.42 2.89 8.18 6.91 9.5v-6.72h-2.07V12h2.07v-1.47c0-2.05 1.26-3.18 3.1-3.18.88 0 1.64.07 1.86.1v2.16h-1.28c-1 0-1.2.48-1.2 1.18V12h2.4l-.31 2.78h-2.09v6.72c4.02-1.32 6.91-5.08 6.91-9.5 0-5.52-4.44-9.96-9.96-9.96z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
                © 2024 Urban Lifestyles. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
