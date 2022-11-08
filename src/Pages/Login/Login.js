import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logInImg from '../../assets/login.avif'
import { AuthContext } from "../../Contex/AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const {googleProvider,login} = useContext(AuthContext);
    const logInByGoogle = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;
            const currentUser ={
              email: user.email
            }
            console.log(currentUser);
            form.reset();
            navigate(from, {replace: true});
            

        
        })
        .catch(error => console.log(error));

    }
    const handleSubmit = () =>{
        googleProvider(logInByGoogle)
        .then((result) =>{
          const user = result.user;
          console.log(user);
          navigate(from, {replace: true});
          
    
          
    
        })
        .catch((error) =>{
          console.error(error)
        })
    
      }
  return (
    <div className="hero w-full my-20 ">
      <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={logInImg} className=" ml-5 w-3/4 rounded-lg" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form  onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
          <p className="text-center mb-4">
            New to Arman's Kitchen?{" "}
            <Link className="text-orange-600 font-bold" to="/signup">
              SignUp
            </Link>
          </p>
          <div className='d-grid gap-2 text-center mt-3'>
         <button className='btn btn-outline btn-primary mb-5  ' onClick={handleSubmit} ><FcGoogle/>{" "} Log in With Google</button>
        
         
         </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
