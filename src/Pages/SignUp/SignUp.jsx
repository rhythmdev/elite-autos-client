import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { FcGoogle } from "react-icons/fc";
import { Button } from 'flowbite-react';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate()

    const handelSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photoURL = form.get('photoUrl');
        const password = form.get('password');
        // console.log(name, email, photoURl, password);
        setRegisterError('');
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters long');
            return;
        }
        else if (!/[A-Z](?=.*?[#?!@$%^&*-])/.test(password)) {
            setRegisterError('Your password should have at least one upper case and one special characters');
            return;
        }


        //create new user
        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL,
                });
                Swal.fire('Sign Up Successfully!')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                Swal.fire(errorMessage)
            });

    }

    return (
        <div>
            <section className="bg-gray-100 dark:bg-gray-900 py-8 rounded">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                    <Link to={'/'} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-full h-10" src={logo} alt="logo" />
                        <span className='font-lobster bg-gradient-to-r from-gradient-start to-gradient-end  text-transparent bg-clip-text'>EliteAutos</span>
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gradient-end md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form onSubmit={handelSignUp} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ryan Dahl" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ryandahl@gmail.com" required />
                                </div>
                                <div>
                                    <label htmlFor="photUrl" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Your Photo Url</label>
                                    <input type="text" name="photoUrl" id="photoUrl" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://i.ibb.co/CbB0XmF/profile-pic.jpg" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <div>
                                    {
                                        registerError && <p className='font-semibold text-sm text-red-600 text-center'>{registerError}</p>
                                    }
                                </div>
                                <button type="submit" className="w-full text-white bg-gradient-to-r from-gradient-start to-gradient-end hover:focus:ring-4 focus:outline-none focus:ring-gradient-start font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gradient-end dark:hover:bg-gradient-start dark:focus:ring-gradient-start">Create an account</button>
                                <span className="flex items-center">
                                    <span className="h-px flex-1 bg-gray-400"></span>
                                    <span className="shrink-0 px-6 font-medium">Or Sign up with</span>
                                    <span className="h-px flex-1 bg-gray-400"></span>
                                </span>
                                <Button className='bg-gradient-to-r from-gradient-start to-gradient-end border-none mx-auto'>
                                    Google
                                    <FcGoogle className="ml-2 h-5 w-5" />
                                </Button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to='/signIn' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;