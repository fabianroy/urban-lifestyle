import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("User Logged Out");
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    console.log(user);

    return (
        <div className="navbar bg-base-100 pt-4 pb-4">
            <div className="flex-1">
                <Link to='/'>
                    <a className="btn btn-ghost text-2xl italic">Urban Lifstyle</a>
                </Link>
            </div>
            {
                user ?
                    <>
                        <div className="flex-none gap-2">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt={user?.displayName || user?.email}
                                            src={user?.photoURL}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><a>{user?.email}</a></li>
                                    <li onClick={handleLogout}><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <Link to='/login' className="btn mr-6">Login</Link>
                    </>

            }
        </div>
    );
};

export default NavBar;