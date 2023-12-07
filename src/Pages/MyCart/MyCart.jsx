import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:6900/myCart/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCartItems(data)
                calculateTotal(data)
            }
            )
    }, [user.email])

    // delete from cart
    const handelDeleteFromCart = (productId) => {
        //  fetch(`http://localhost:6900/myCart/remove?userEmail=${user?.email}&productId=${productId}`)
        Swal.fire({
            title: "Are you sure you want to remove it?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#088b23e0",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:6900/myCart/remove?userEmail=${user?.email}&productId=${productId}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            console.log(data);
                            Swal.fire({
                                title: "Removed!",
                                text: "Your file has been remove.",
                                icon: "success"
                            });
                            const remainingCartItems = cartItems.filter((item) => item._id !== productId);
                            setCartItems(remainingCartItems);
                            calculateTotal(remainingCartItems);
                        }
                    })


            }
        });
    }

    // calculate total
    const calculateTotal = (items) => {
        const grandTotal = items.reduce((acc, item) => {
            const price = parseFloat(item.userProductData.price);
            return acc + price;
        }, 0)

        setTotalPrice(grandTotal)
    }
    //navigate
    const handelUserState = () => {
        navigate(location?.state ? location.state : '/')
    }

    return (
        <div className="py-4">

            {
                cartItems?.length === 0 ? (
                    <h2 className="text-xl font-semibold text-gradient-end text-center py-5">Your cart is empty</h2>)

                    :
                    (
                        <div className="flex flex-col max-w-3xl p-6 space-y-6 sm:p-10 dark:bg-gray-900 dark:text-gray-100 mx-auto">
                            <h2 className="text-xl font-semibold text-gradient-end">Your cart</h2>
                            <ul className="flex flex-col divide-y dark:divide-gray-700">

                                {
                                    cartItems?.map(item => <li key={item._id} className="flex flex-col  py-6 sm:flex-row sm:justify-between m">
                                        <div className="flex w-full space-x-2 sm:space-x-4">
                                            <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={item?.userProductData?.
                                                image} alt="Polaroid camera" />
                                            <div className="flex flex-col justify-between w-full pb-4">
                                                <div className="flex justify-between w-full pb-2 space-x-2">
                                                    <div className="space-y-1">
                                                        <h3 className="text-lg font-semibold text-gradient-end sm:pr-8">{item?.userProductData?.
                                                            product_name}</h3>
                                                        <p className="text-sm  dark:text-gray-400">{item?.userProductData
                                                            ?.brand_name}</p>
                                                        <p className="text-sm  dark:text-gray-400">{item?.userProductData
                                                            ?.category}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-lg font-bold text-gradient-end ">{item?.userProductData
                                                            ?.price}$</p>

                                                    </div>
                                                </div>
                                                <div className="flex text-sm divide-x">
                                                    <button onClick={() => handelDeleteFromCart(item?._id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1 font-medium">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                            <rect width="32" height="200" x="168" y="216"></rect>
                                                            <rect width="32" height="200" x="240" y="216"></rect>
                                                            <rect width="32" height="200" x="312" y="216"></rect>
                                                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                        </svg>
                                                        <span>Remove</span>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </li>)
                                }

                            </ul>
                            <div className="space-y-1 text-right font-medium">
                                <p>Total amount:
                                    <span className="font-semibold text-gradient-end"> {totalPrice}$</span>
                                </p>
                                <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button onClick={handelUserState} type="button" className="px-6 py-2 border rounded-md dark:border-gradient-start">Back
                                    <span className="sr-only sm:not-sr-only">to shop</span>
                                </button>

                            </div>
                        </div>
                    )



            }


        </div>
    );
};

export default MyCart;