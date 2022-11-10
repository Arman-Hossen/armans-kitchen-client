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
    const {  loading } = useContext(AuthContext);
    
    if (loading) {
      return (
        <div className="text-center">
          <button
            disabled
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline mr-3 w-4 h-4 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </button>
        </div>
      );
    }
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