import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu";
import { RiTwitterXLine, RiRedditLine } from "react-icons/ri";
const Footer = () => {
    return (
        <div>
            <footer className="p-4 bg-gray-50 md:p-8 lg:p-10 dark:bg-gray-800 rounded">
                <div className="mx-auto max-w-screen-xl text-center">
                    <Link to={'/'} className="flex justify-center items-center dark:text-white px-2">
                        <img src={logo} alt="logo" className='' />
                        <span className="self-center whitespace-nowrap text-3xl font-bold dark:text-white font-lobster bg-gradient-to-r from-gradient-start to-gradient-end  text-transparent bg-clip-text ">EliteAutos</span>
                    </Link>
                    <p className="my-6 text-gradient-end dark:text-gray-400 font-semibold">Revolutionize Your Ride, Embrace Automotive Excellence!</p>
                    <ul className="flex flex-wrap justify-center items-center mb-3 text-gray-900 dark:text-white gap-3">
                        <li>
                            <a href="https://www.facebook.com/" className="mr-4 hover:underline md:mr-6 text-2xl"><LuFacebook /></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" className="mr-4 hover:underline md:mr-6 text-2xl"><RiTwitterXLine /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ " className="mr-4 hover:underline md:mr-6 text-2xl"><LuInstagram /></a>
                        </li>

                        <li>
                            <a href="https://www.reddit.com/" className="mr-4 hover:underline md:mr-6 text-2xl"><RiRedditLine /></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/" className="mr-4 hover:underline md:mr-6 text-2xl"><LuYoutube /></a>
                        </li>

                    </ul>
                    <span className="text-sm text-gradient-end sm:text-center dark:text-gray-400 font-medium">© 2018-2023 <a href="#" className="hover:underline">EliteAutos™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;