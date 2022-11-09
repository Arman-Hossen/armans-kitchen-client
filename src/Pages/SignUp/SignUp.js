import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import registrationImg from '../../assets/registration.avif'
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('Sign In')
    const {createUser} = useContext(AuthContext)
    const handleSignIn = (event) => {
      event.preventDefault();
      const form = event.target;
      // const name = form.name.value;
      const email = form.email.value;
       const password = form.password.value;
       createUser(email, password)
       .then(result =>{
          const user = result.user;
          console.log(user);
          form.reset();
       })
       .catch(err => console.error(err));
       
    };
    return (
        <div className="hero w-full my-20 ">
          <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <img src={registrationImg} className=" ml-8 w-3/4 rounded-lg" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
              <form onSubmit={handleSignIn}  className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
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
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn btn-primary" value="SignUp" />
                </div>
              </form>
              <p className="text-center mb-4">
                Already Have an Account??{" "}
                <Link className="text-orange-600 font-bold" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    };

export default SignUp;