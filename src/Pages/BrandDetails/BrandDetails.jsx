import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Button, Carousel } from 'flowbite-react';
import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
    const products = useLoaderData();
    const { brandName } = useParams();
    const filteredProducts = products.filter(product => product.brand_name === brandName);
    // console.log(filteredProducts);



    return (
        <div className='py-8'>
            {/* brand slider area */}
            <div className="h-56 sm:h-64 xl:h-96 2xl:h-96">
                <Carousel>
                    {
                        filteredProducts?.slice(0, 3)?.map((brandImage, idx) => <img key={idx} src={brandImage?.image} alt="..." />)
                    }

                </Carousel>
            </div>



            {/* end of brand slider area */}

            {/* brand products area */}
            <div className="flex items-center justify-center">
                <div className='py-12'>
                    {
                        filteredProducts.length === 0 ? (<h2 className="text-2xl font-semibold text-gradient-end text-center">No Products Available For <span className="text-gradient-start">{brandName}</span></h2>)
                            :
                            (

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 w-full">
                                    {
                                        filteredProducts?.map(product => (
                                            <div key={product?._id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
                                                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
                                                    <img
                                                        src={product?.image}
                                                        alt="product-image" className="object-cover w-full h-full" />
                                                </div>
                                                <div className="p-6">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <p className="block text-lg antialiased font-semibold leading-relaxed text-gradient-end">
                                                            {product?.product_name}
                                                        </p>
                                                        <p className="block  text-lg antialiased font-semibold leading-relaxed text-gradient-end">
                                                            ${product?.price}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center justify-between my-3">
                                                        <h4 className="text-base font-semibold text-slate-600">Brand: {product?.brand_name}</h4>
                                                        <h4 className="text-base font-semibold text-slate-600">Type: {product?.category}</h4>
                                                    </div>
                                                    <div className='flex items-center my-2 gap-2'>
                                                        <h5 className='text-base font-semibold text-slate-600'>Rating:
                                                        </h5>
                                                        <Rating
                                                            style={{ maxWidth: 110 }}
                                                            value={product?.rating}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-6 pt-0 flex items-center justify-between">
                                                    <Button className='bg-gradient-to-r from-gradient-start to-gradient-end border-node'>Update</Button>
                                                    <Link to={`/productDetails/${product?._id}`}>
                                                        <Button className='bg-gradient-to-r from-gradient-end to-gradient-start border-none'>Details</Button>
                                                    </Link>

                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                    }



                </div>
            </div>
            {/* end of brand products area */}

        </div>
    );
};

export default BrandDetails;