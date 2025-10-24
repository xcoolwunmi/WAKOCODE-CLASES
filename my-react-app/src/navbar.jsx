function Navbar() {
  return (
    <div className="font-sans">
      {/* Top banner */}
      <div className="bg-[#f4f1eb] text-center text-sm py-2 text-gray-700">
        Heard you wanted more. <span className="italic">Plus</span> Camille Rowe is{" "}
        <a href="#" className="underline hover:text-gray-900">
          here
        </a>
        .
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
        {/* Left - Logo */}
        <h1 className="text-2xl font-semibold">Reformation</h1>

        {/* Middle - Links */}
        <ul className="hidden md:flex space-x-6 text-sm">
          {[
            "New",
            "Clothing",
            "Dresses",
            "Tops",
            "Jeans",
            "Sweaters",
            "Weddings",
            "Shoes",
            "Accessories",
            "Curated",
          ].map((item) => (
            <li
              key={item}
              className="hover:underline hover:text-gray-900 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right - Icons and Search */}
        <div className="flex items-center space-x-6 text-sm">
          <a href="#" className="hover:underline">
            Sustainability
          </a>
          <a href="#" className="hover:underline">
            Our stores
          </a>
          <a href="#" className="hover:underline">
            Sign in
          </a>
          <div className="flex items-center border-b border-gray-400">
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm py-1 px-1"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
