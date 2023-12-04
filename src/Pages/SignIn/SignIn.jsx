import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {

    const handelSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
    }

    return (
        <div>
            <section className="bg-gray-100 dark:bg-gray-900 rounded py-8">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <Link to={'/'} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-full h-10" src={logo} alt="logo" />
                        <span className='font-lobster bg-gradient-to-r from-gradient-start to-gradient-end  text-transparent bg-clip-text'>EliteAutos</span>
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gradient-end md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handelSignIn} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>

                                <button type="submit" className="w-full text-white bg-gradient-to-r from-gradient-start to-gradient-end hover:focus:ring-4 focus:outline-none focus:ring-gradient-start font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gradient-end dark:hover:bg-gradient-start dark:focus:ring-gradient-start">Create an account</button>
                                <span className="flex items-center">
                                    <span className="h-px flex-1 bg-gray-400"></span>
                                    <span className="shrink-0 px-6 font-medium">Or Sign in with</span>
                                    <span className="h-px flex-1 bg-gray-400"></span>
                                </span>
                                <Button className='bg-gradient-to-r from-gradient-start to-gradient-end border-none mx-auto'>
                                    Google
                                    <FcGoogle className="ml-2 h-5 w-5" />
                                </Button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to='/signUp' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignIn;