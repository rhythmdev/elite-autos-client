import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import logo from '../../assets/logo.svg'
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

// from-[#07B3C6] to-[#034f68] 
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handelSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire('Sign Out Successfully')
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div>

      <Navbar fluid rounded >
        <Link to='/'>
          <Navbar.Brand>
            <img src={logo} className="h-10 w-full" alt="Logo" />
            <span className="self-center whitespace-nowrap text-xl lg:text-3xl font-bold dark:text-white font-lobster bg-gradient-to-r from-gradient-start to-gradient-end  text-transparent bg-clip-text">EliteAutos</span>
          </Navbar.Brand>

        </Link>

        <div className="flex md:order-2">

          {user ? (
            <Button size='sm' onClick={handelSignOut} className="bg-gradient-to-r from-gradient-start to-gradient-end border-none mr-3">Sign Out</Button>
          )
            : (
              <Link to='/signIn'>
                <Button size='sm' className="bg-gradient-to-r from-gradient-start to-gradient-end border-none mr-3">Sign In</Button>
              </Link>

            )
          }


          <Dropdown
            arrowIcon={false}
            inline
            label={
              user ? (
                <Avatar alt="User settings" img={user?.photoURL} rounded />
              )
                :
                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              {
                user ? (
                  <span className="block text-sm">{user?.displayName}</span>
                )
                  :
                  (
                    <span className="block text-sm">Bonnie Green</span>
                  )
              }
              {
                user ? (
                  <span className="block truncate text-sm font-medium">{user?.email}</span>
                )
                  :
                  (
                    <span className="block truncate text-sm font-medium">name@gmail.com</span>
                  )
              }

            </Dropdown.Header>

          </Dropdown>
          <Navbar.Toggle />


        </div>
        <Navbar.Collapse className="text-gradient-end">

          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-gradient-start underline font-semibold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-gradient-start underline font-semibold" : ""
            }
          >
            Add Product
          </NavLink>
          <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-gradient-start underline font-semibold" : ""
            }
          >
            My Cart
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-gradient-start underline font-semibold" : ""
            }
          >
            Contact
          </NavLink>
        </Navbar.Collapse>
      </Navbar>


    </div>
  );
};

export default NavBar;

