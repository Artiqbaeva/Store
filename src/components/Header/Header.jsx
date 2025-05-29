import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Search,  ShoppingCart } from "lucide-react"; 


const Header = () => {
  const navLinkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition duration-200 ${
      isActive ? "bg-gray-800 text-white " : "text-gray-700 hover:bg-gray-100"
    }`;


    const [query, setQuery] = useState("");

    const handleSearch = () => {
      if (query.trim()) {
        console.log("Searching for:", query);
      }
    };


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <NavLink to="/" className="text-2xl font-bold text-gray-800 flex gap-2 items-center ">
          Store {<ShoppingCart/>}
        </NavLink>
        <nav className="flex gap-2 md:gap-4 text-sm font-medium">
        <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkStyle}>
            Products
          </NavLink>
          <NavLink to="/users" className={navLinkStyle}>
            Users
          </NavLink>
          <NavLink to="/selected" className={navLinkStyle}>
              Selected
          </NavLink>

          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-md border">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="outline-none w-full text-sm bg-transparent"
      />
      <button
        onClick={handleSearch}
        className=""
      >
        <Search size={20} />
      </button>
    </div>
        </nav>
      
      </div>
    </header>
  );
};

export default React.memo(Header);
