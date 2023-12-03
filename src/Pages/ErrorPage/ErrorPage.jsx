import { Button } from 'flowbite-react';
import error from '../../assets/images/404/error.gif'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto py-6' src={error} alt="error" />
            <Link to={'/'}>
                <Button className='mx-auto bg-gradient-to-r from-gradient-start to-gradient-end border-none'>Back To Home</Button>
            </Link>

        </div>
    );
};

export default ErrorPage;