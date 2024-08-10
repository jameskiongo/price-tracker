function Navbar() {
  const isAuthenticated = () => {
    return false;
  };
  return (
    <>
      <nav className="navbar min-h-16 fixed top-0 md:px-20 md:min-h-17 bg-base-100 z-[1]">
        {/* <div className="navbar-start"> */}
        <a className="navbar-start logo-text lg:px-4 lg:text-4xl sm:px-2">
          Price Tracker
        </a>
        {/* </div> */}

        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn lg:hidden btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 4h18v2H3zm6 7h12v2H9zm-6 7h18v2H3z"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content right-0 rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl hover:shadow-md"
            >
              <li>
                <a>WishList</a>
              </li>
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>Sign up</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex lg:items-center lg:justify-end">
          <ul className="menu menu-horizontal text-lg px-1">
            <li>
              <a>WishList</a>
            </li>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Sign up</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
