import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {

    const { brandName, image_url } = brand || {};

   

    return (
        <div>
            
            <Link to={`/brandDetails/${brand.brandName}`}>
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full cursor-pointer ">
                    <div
                        className="relative h-64 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-50 shadow shadow-gray-200 ">
                        <img className="w-80 h-60 mx-auto"
                            src={image_url} />
                    </div>
                    <div className="p-6">
                        <h5 className="block mb-2 text-center  text-xl antialiased font-bold leading-snug tracking-normal text-gradient-end">
                            {brandName}
                        </h5>

                    </div>

                </div>
            </Link>
          
         

        </div>
    );
};

export default BrandCard;

BrandCard.propTypes = {
    brand: PropTypes.object
}