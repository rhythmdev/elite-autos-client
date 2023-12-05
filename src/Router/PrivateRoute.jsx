import PropTypes from 'prop-types'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='flex items-center justify-center gap-2 min-h-screen'>
            <div className="">
                <Spinner aria-label="Center-aligned spinner example" size='xl' />
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/signIn'} />
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}