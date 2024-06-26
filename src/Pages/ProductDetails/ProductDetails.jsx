import { Rating } from "@smastrom/react-rating";
import { Button } from "flowbite-react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const product = useLoaderData();
    const { user } = useContext(AuthContext);

    const { product_name, brand_name, price, image, rating, description, category } = product || {};

    const productData = {
        product_name: product.product_name,
        brand_name: product.brand_name,
        image: product.image,
        price: product.price,
        category: product.category
    }
    console.log(productData);
    const cartData = {
        userEmail: user?.email,
        userProductData: productData
    }


    const handelAddToCart = () => {


        fetch('https://elite-autos-server.vercel.app/myCart/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added To Cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className="py-10 lg:mt-14">

            <div className="relative flex mx-auto bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-col lg:flex-row">
                <div
                    className="relative lg:w-2/4 m-0 overflow-hidden text-gray-700 bg-white lg:rounded-r-none bg-clip-border rounded-xl shrink-0">
                    <img
                        src={image}
                        alt="product-image" className="object-cover w-full h-full" />
                </div>
                <div className="p-6">
                    <h6
                        className="block mb-4 text-base antialiased font-semibold leading-relaxed tracking-normal text-gradient-end uppercase">
                        {brand_name}
                    </h6>

                    <h6
                        className="block mb-4 text-sm antialiased font-bold leading-relaxed tracking-normal text-gray-500 uppercase">
                        {category}
                    </h6>

                    <h4 className="block mb-2  text-2xl antialiased font-bold leading-snug tracking-normal text-gradient-end">
                        {product_name}
                    </h4>
                    <p className="block mb-8  text-base antialiased font-normal leading-relaxed text-gray-600">
                        {description}
                    </p>
                    <div className="flex items-center justify-between">
                        <h5 className="text-gradient-end text-lg font-semibold">Price: ${price}</h5>
                        <div className="flex gap-1">
                            <h5 className="text-gradient-end text-lg font-semibold">Rating:</h5>
                            <Rating

                                style={{ maxWidth: 110 }}
                                value={rating}
                                readOnly
                            />
                        </div>

                    </div>
                    <Button onClick={handelAddToCart} className="bg-gradient-to-r from-gradient-start to-gradient-end border-none mt-4">Add to Cart</Button>

                </div>
            </div>

        </div>
    );
};

export default ProductDetails;