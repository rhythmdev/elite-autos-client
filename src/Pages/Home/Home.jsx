import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import BrandCard from "../../components/BrandCard/BrandCard";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaSteamSymbol } from "react-icons/fa";
import { LuFolderHeart } from "react-icons/lu";

const Home = () => {
  const brands = useLoaderData();
  // console.log(brands);
  return (
    <div>
      <Banner />
      {/* who we are area */}
      <div className="py-12">
        <h3 className="text-center text-2xl lg:text-4xl font-bold font-lobster bg-gradient-to-r from-gradient-start to-gradient-end  text-transparent bg-clip-text">Who We Are</h3>
        <p className="text-base font-medium text-slate-500 antialiased text-center p-5">Welcome to EliteAutos, where automotive passion meets unparalleled service. At EliteAutos, we take pride in being more than just a car dealership. We are a team of dedicated enthusiasts with a shared love for automobiles and a commitment to delivering an exceptional experience to our customers.</p>
      </div>
      {/* end of who we are area */}
      {/* our brands area start */}
      <div className="mt-5">
        <h3 className="text-center text-2xl lg:text-4xl font-bold font-lobster bg-gradient-to-r from-gradient-start to-gradient-end  text-transparent bg-clip-text">Our Brands</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
        {
          brands?.map((brand) => <BrandCard key={brand?._id} brand={brand} />)
        }
      </div>
      {/* end of our brands area */}
      {/* our mission area */}
      <div className="py-12">
        <h3 className="text-center text-2xl lg:text-4xl font-bold font-lobster bg-gradient-to-r from-gradient-start to-gradient-end  text-transparent bg-clip-text">Our Mission</h3>
        <p className="text-base font-medium text-slate-500 antialiased text-center p-5">At the core of EliteAutos is a simple yet powerful mission: to provide you with the ultimate automotive journey. We strive to redefine the car-buying experience by offering a curated selection of premium vehicles from six distinct brands, each representing the pinnacle of design, performance, and innovation.</p>
      </div>
      {/* end of our mission area */}
      {/* our values are */}
      <div className="py-12">
        <h3 className="text-center text-2xl lg:text-4xl font-bold font-lobster bg-gradient-to-r from-gradient-start to-gradient-end  text-transparent bg-clip-text">Our Values</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-8 text-center">
          <div>
            <MdOutlineContactSupport className="text-4xl text-gradient-end mx-auto" />

            <h3 className="mt-4 text-xl font-semibold text-gradient-end dark:text-white ">Customer-Centric Approach</h3>

            <p className="mt-2 text-slate-500 dark:text-gray-400 ">Your satisfaction is our priority. We are here to understand your needs, answer your questions, and guide you through every step of the car-buying process.</p>
          </div>

          <div>
            <FaSteamSymbol className="text-4xl text-gradient-end mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gradient-end dark:text-white">Expertise and Knowledge</h3>

            <p className="mt-2 text-slate-500 dark:text-gray-400">
              With a team of automotive experts, we bring a wealth of knowledge about the brands we represent. Trust us to provide you with accurate information and insights to help you make informed decisions.
            </p>
          </div>

          <div>
            <LuFolderHeart className="text-4xl text-gradient-end mx-auto" />
            <h1 className="mt-4 text-xl font-semibold text-gradient-end dark:text-white"> Integrity and Transparency</h1>

            <p className="mt-2 text-slate-500 dark:text-gray-400">Honesty is the foundation of our business. We believe in transparent transactions, clear communication, and building long-lasting relationships based on trust.</p>
          </div>
        </div>
      </div>
      {/* end of our value area */}

    </div>
  );
};

export default Home;