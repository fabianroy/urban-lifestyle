import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    document.title = "Urban Lifestyle | Register";

    const { createUser, signWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const [email, password] = e.target.elements;
        createUser(email.value, password.value)
            .then((userCredential) => {
                console.log("User Registered");
                console.log(userCredential);
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const handleGoogleRegister = () => {
        signWithGoogle()
            .then(() => {
                console.log("User Registered");
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div className="hero my-20">
            <div className="hero-content flex-col md:flex-row gap-20">

                <div className="card shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center mt-10">Sign Up Now!</h1>

                    <form onSubmit={handleRegister} className="card-body">

                        <div className="form-control">
                            <label htmlFor="email" className="label">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="password" className="label">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-gray-800 text-white">
                                Register
                            </button>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-gray-100" onClick={handleGoogleRegister}>Register with Google</button>
                        </div>
                    </form>
                    <div className="text-center mb-4">
                        Already have an account? <Link className='text-orange-600' to="/login">Login Here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;