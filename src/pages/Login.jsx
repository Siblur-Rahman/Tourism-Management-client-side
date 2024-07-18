import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
            
            const {signInUser, signInWithGoogle, signInWithGithub, user} = useContext(AuthContext)
            const navigate = useNavigate();
            // const {email} = user;
            const handleLogin = e =>{
                e.preventDefault();
                const email =e.target.email.value
                const password =e.target.password.value
                // console.log(email, password)
                signInUser(email, password)
                navigate(`/`)
                .then(result =>{
                    console.log(result.user)
                    e.target.reset();
                })
                .catch(error=>{
                    console.log(error);
                    toast('Your email/password is invalid')

                })
            }

            const handleGoogleSignIn = () =>{
                signInWithGoogle()
                navigate("/")
                .then(result =>{
                    console.log(result.user)
                })
                .catch(error =>{
                    console.log(error)
                })
            }
            const handleGithubSignIn = () =>{
                signInWithGithub()
                navigate("/")
                .then(result =>{
                    console.log(result.user)
                })
                .catch(error =>{
                    console.log(error)
                })
            }
    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2x">
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                    <label className="label">
                        <span className="">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered " required />
                    <label className="label">
                        <a href="#" className="link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>New Here? Please
                    <Link to="/register"><button className="btn btn-link">REGISTER</button></Link>
                </p>
                <div className="divider">Countinue With</div>
                <div className="flex justify-between">
                    <p><button onClick={handleGoogleSignIn} className="btn">GOOGLE</button></p>
                    <p><button onClick={handleGithubSignIn} className="btn">GITHUB</button></p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;