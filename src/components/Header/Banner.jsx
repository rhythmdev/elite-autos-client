import { Button, Carousel } from "flowbite-react";
import bannerOne from "../../assets/images/home-banner/bannerOne.jpg"
import bannerTwo from "../../assets/images/home-banner/bannerTwo.jpg"
import bannerThree from "../../assets/images/home-banner/bannerThree.jpg"
import bannerFour from "../../assets/images/home-banner/bannerFour.jpg"

const Banner = () => {
    return (
        <div className="py-5">
            <div className="w-full h-56 sm:h-64 lg:h-[600px] xl:h-[600px] 2xl:h-[600px]">
                <Carousel>
                    <div className=" flex h-full items-center justify-center dark:bg-gray-700 dark:text-white relative">
                        <img src={bannerOne} alt="banner-1" className="w-full  bg-[#1b1b1bc7] opacity-70" />
                        <div className=" absolute">
                            <h3 className="px-2 text-[#03b8f3] text-2xl lg:text-5xl font-bold text-center font-lobster">Drive in Style<br />Explore Our Diverse Collection of Top-Tier Brand Cars</h3>
                            <Button className="mx-auto mt-5 bg-transparent border-2 border-x-gradient-start border-y-gradient-end text-slate-200 lg:text-xl font-semibold font-lobster ">Explore More</Button>
                        </div>

                    </div>
                    <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
                        <img src={bannerTwo} alt="banner-2" className="w-full bg-[#1b1b1bc7] opacity-70" />
                        <div className="absolute">
                            <h3 className="px-2 text-[#03b8f3] text-2xl lg:text-5xl font-bold text-center font-lobster">Unleash the Power of Performance<br />Discover Premium Brand Cars at Your Fingertips</h3>
                            <Button className="mx-auto mt-5 bg-transparent border-2 border-x-gradient-start border-y-gradient-end text-slate-200 lg:text-xl font-bold font-lobster ">Explore More</Button>
                        </div>


                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img src={bannerThree} alt="banner-3" className="w-full bg-[#1b1b1bc7]  opacity-70" />
                        <div className="absolute">
                            <h3 className="px-2 text-[#03b8f3] text-2xl lg:text-5xl font-bold text-center font-lobster">Ride the Future<br /> Elevate Your Drive with Our Exclusive Range of Brand Cars</h3>
                            <Button className="mx-auto mt-5 bg-transparent border-2 border-x-gradient-start border-y-gradient-end text-slate-200 lg:text-xl font-semibold font-lobster ">Explore More</Button>
                        </div>

                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img src={bannerFour} alt="banner-4" className="w-full bg-[#1b1b1bc7]  opacity-70" />
                        <div className="absolute">
                            <h3 className="px-2 text-[#03b8f3] text-2xl lg:text-5xl font-bold text-center font-lobster">Luxury Redefined<br />Your Gateway to a World of Prestigious Brand Automobiles</h3>
                            <Button className="mx-auto mt-5 bg-transparent border-2 border-x-gradient-start border-y-gradient-end text-slate-200 lg:text-xl font-semibold font-lobster ">Explore More</Button>
                        </div>

                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;