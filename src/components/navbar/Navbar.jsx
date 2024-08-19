// // import { Link } from "react-router-dom";
// // import SearchBar from "../searchbar/SearchBar";


// // const Navbar = () => {
// //     // navList Data
// //     const navList = (
// //         <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
// //             {/* Home */}
// //             <li>
// //                 <Link to={'/'}>Home</Link>
// //             </li>

// //             {/* All Product */}
// //             <li>
// //                 <Link to={'/allproduct'}>All Product</Link>
// //             </li>

// //             {/* Signup */}
// //             <li>
// //                 <Link to={'/signup'}>Signup</Link>
// //             </li>

// //             {/* User */}
// //             <li>
// //                 <Link to={'/user-dashboard'}>Kamal</Link>
// //             </li>

// //             {/* Admin */}
// //             <li>
// //                 <Link to={'/admin-dashboard'}>Admin</Link>
// //             </li>

// //             {/* logout */}
// //             {/* <li>
// //                 logout
// //             </li> */}

// //             {/* Cart */}
// //             <li>
// //                 <Link to={'/cart'}>
// //                     Cart(0)
// //                 </Link>
// //             </li>
// //         </ul>
// //     )
// //     return (
// //         <nav className="bg-pink-600 sticky top-0">
// //             {/* main  */}
// //             <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
// //                 {/* left  */}
// //                 <div className="left py-3 lg:py-0">
// //                     <Link to={'/'}>
// //                     <h2 className=" font-bold text-white text-2xl text-center">Crafted-Wonders</h2>
// //                     </Link>
// //                 </div>

// //                 {/* right  */}
// //                 <div className="right flex justify-center mb-4 lg:mb-0">
// //                     {navList}
// //                 </div>

// //                 {/* Search Bar  */}
// //                 <SearchBar />
// //             </div>
// //         </nav>
// //     );
// // }

// // export default Navbar;
// import { Link, useNavigate } from "react-router-dom";
// import SearchBar from "../searchbar/SearchBar";
// import { useSelector } from "react-redux";


// const Navbar = () => {
//     // get user from localStorage 
//     const user = JSON.parse(localStorage.getItem('users'));

//     // navigate 
//     const navigate = useNavigate();

//     // logout function 
//     const logout = () => {
//         localStorage.clear('users');
//         navigate("/login")
//     }
//     // cart ka number bhadate hai
//     const cartItems = useSelector((state)=> state.cart);

//     // navList Data
//     const navList = (
//         <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
//             {/* Home */}
//             <li>
//                 <Link to={'/'}>Home</Link>
//             </li>

//             {/* All Product */}
//             <li>
//                 <Link to={'/allproduct'}>All Product</Link>
//             </li>

//             {/* Signup */}
//             {!user ? <li>
//                 <Link to={'/signup'}>Signup</Link>
//             </li> : ""}

//             {/* Signup */}
//             {!user ? <li>
//                 <Link to={'/login'}>Login</Link>
//             </li> : ""}

//             {/* User */}
//             {user?.role === "user" && <li>
//                 <Link to={'/user-dashboard'}>{user?.name}</Link>
//             </li>}

//             {/* Admin */}
//             {user?.role === "admin" && <li>
//                 <Link to={'/admin-dashboard'}>Admin</Link>
//             </li>}

//             {/* logout */}
//             {user && <li className=" cursor-pointer" onClick={logout}>
//                 logout
//             </li>}

//             {/* Cart */}
//             <li>
//                 <Link to={'/cart'}>
//                     Cart({cartItems.length})
//                 </Link>
//             </li>
//         </ul>
//     )
//     return (
//         <nav className="bg-pink-600 sticky top-0">
//             {/* main  */}
//             <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
//                 {/* left  */}
//                 <div className="left py-3 lg:py-0">
//                     <Link to={'/'}>
//                         <h2 className=" font-bold text-white text-2xl text-center">Crafted-Wonders</h2>
//                     </Link>
//                 </div>

//                 {/* right  */}
//                 <div className="right flex justify-center mb-4 lg:mb-0">
//                     {navList}
//                 </div>

//                 {/* Search Bar  */}
//                 <SearchBar />
//             </div>
//         </nav>
//     );
// }

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import { useSelector } from "react-redux";
import { select } from "@material-tailwind/react";

const Navbar = () => {
  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  // navigate
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // cart ka number bhadate hai
  const cartItems = useSelector((state) => state.cart);

  // Determine the website name based on user's role
  const websiteName = user && user.role === "admin" ? "Crafted-Wonders Seller" : "Crafted-Wonders";

  // navList Data
  const navList = (
    <ul className="flex space-x-4">
      {user && user.role === "user" && (
        <li>
          <Link to={"/user-dashboard"} className="text-white hover:underline">
            {user.name}
          </Link>
        </li>
      )}
      <li>
        <Link to={"/"} className="text-white hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/allproduct"} className="text-white hover:underline">
          All Product
        </Link>
      </li>
      {!user && (
        <li>
          <Link to={"/signup"} className="text-white hover:underline">
            Signup
          </Link>
        </li>
      )}
      {!user && (
        <li>
          <Link to={"/login"} className="text-white hover:underline">
            Login
          </Link>
        </li>
      )}
      {user && user.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"} className="text-white hover:underline">
            Admin
          </Link>
        </li>
      )}
      {user && (
        <li className="text-white cursor-pointer hover:underline" onClick={logout}>
          Logout
        </li>
      )}
    </ul>
  );

  return (
    <nav className="bg-pink-600 sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className="font-bold text-white text-2xl text-center ml-4">
              {websiteName}
            </h2>
          </Link>
        </div>

        {/* right */}
        <div className="right flex items-center space-x-4">
          {navList}

          {/* Search Bar  */}
          <SearchBar />

          {/* Cart */}
          <Link to={"/cart"} className="text-white hover:underline">
            <div className="flex items-center">
              <img className="w-8 h-8" src="cart.svg" alt="Cart" />
              <span className="ml-2">{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;