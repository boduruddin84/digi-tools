const NavBar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 shadow-sm justify-between">
        <div className="flex-1">
          <a className="text-xl font-extrabold text-[#4F39F6]">DigiTools</a>
        </div>

        <div className="hidden lg:flex gap-5 mr-100">
            <p>Products</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Testimonials</p>
            <p>FAQ</p>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
              </div>
            </div>

          </div>
          <div className="dropdown dropdown-end">
            <div className="space-x-4">
                <button>Login</button>
                <button className="btn btn-primary rounded-full">Get Started</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
