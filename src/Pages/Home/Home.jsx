
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import BrandCard from "../../components/BrandCard/BrandCard";


const Home = () => {
  const brands = useLoaderData();
  // console.log(brands);
  return (
    <div>
      <Banner />
      {/* our brands area start */}
      <div className="mt-5">
        <h3 className="text-center text-2xl lg:text-4xl font-bold font-lobster bg-gradient-to-r from-gradient-start to-gradient-end  text-transparent bg-clip-text">Our Brands</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
       {
        brands?.map((brand) => <BrandCard key={brand?._id} brand={brand}/>)
       }
      </div>
      {/* end of our brands area */}

    </div>
  );
};

export default Home;