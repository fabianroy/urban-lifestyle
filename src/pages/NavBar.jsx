
const NavBar = () => {

    const user = true;

    return (
        <div className="navbar bg-base-100 pt-4 pb-4">
            <div className="flex-1">
                <a className="btn btn-ghost md:text-2xl italic">Urban Lifstyle</a>
            </div>
            {
                user ?
                    <>
                        <div className="flex-none gap-2">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </>
                    :
                    <>
                    <button className="btn mr-6">Login</button>
                    </>
                    
            }
        </div>
    );
};

export default NavBar;