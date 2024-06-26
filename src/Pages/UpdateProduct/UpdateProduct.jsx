import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const car = useLoaderData();
    const { _id, product_name, brand_name, price, category, image, rating, description } = car || {};
    const navigate = useNavigate();

    const handelUpdateProduct = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const product_name = form.get('product_name');
        const brand_name = form.get('brand_name');
        const price = form.get('price');
        const category = form.get('category');
        const image = form.get('image');
        const rating = form.get('rating');
        const description = form.get('description');

        const updatedProduct = {
            product_name,
            brand_name,
            price,
            category,
            image,
            rating,
            description
        }
        console.log(updatedProduct);
        //send product data to database
        fetch(`https://elite-autos-server.vercel.app/updateProduct/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
                navigate(`/productDetails/${car?._id}`)
            })
        e.currentTarget.reset()
    }
    return (
        <div className="py-10">
            <h2 className="text-2xl text-gradient-end font-semibold text-center">Update {brand_name}</h2>

            <div className=" p-4 w-full max-w-2xl h-full md:h-auto mx-auto mt-3">

                <div className=" p-4 bg-gray-100 rounded-lg shadow dark:bg-gray-800 sm:p-5">

                    <form onSubmit={handelUpdateProduct}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="product_name" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Product Name</label>
                                <input type="text" name="product_name" id="product_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" defaultValue={product_name} required />
                            </div>
                            <div>
                                <label htmlFor="brand_name" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Brand</label>
                                <select id="brand_name" name="brand_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                                    <option defaultValue={brand_name}>{brand_name}</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Ford">Ford</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Tesla">Tesla</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Price</label>
                                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" defaultValue={price} required />
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Category</label>
                                <select id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                                    <option defaultValue={category}>{category}</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="SUV">SUV (Sport Utility Vehicle)</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Luxury">Luxury</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="image" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Product Image</label>
                                <input type="text" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product image url" defaultValue={image} required />
                            </div>
                            <div>
                                <label htmlFor="rating" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Rating</label>
                                <input type="number" name="rating" id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product rating" min={1} max={5} defaultValue={rating} required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here" defaultValue={description} required></textarea>
                            </div>
                        </div>
                        <button type="submit" className="text-white inline-flex items-center bg-gradient-to-r from-gradient-start to-gradient-end hover:bg-gradient-start focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            Update product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;