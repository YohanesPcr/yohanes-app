// ------ Navbar.jsx ------

import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Phone, Info } from 'lucide-react';

// Fungsi untuk styling NavLink
const menuClass = ({ isActive }) =>
  `hover:text-[#00B074] cursor-pointer ${
    isActive ? 'text-[#6f42c1] font-semibold' : 'text-gray-700'
  }`;

export default function Navbar() {
  return (
   <nav
  id="navbar"
  className="bg-white shadow-sm py-4 sticky top-0 z-50"
>
  <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
    {/* Logo */}
    <div id="navbar-logo" className="flex items-center space-x-2">
      <img
        src="https://kulineran.com/themes/default/images/kulineran-logo-main.png"
        alt="Logo"
        className="h-auto max-h-[2.25rem]"
        id="logo-image"
      />
    </div>

    {/* Menu navigasi */}
    <ul id="navbar-menu" className="hidden md:flex space-x-6 font-medium">
      <li id="menu-free-learning">
        <NavLink to="/guestLayout" className={menuClass}>
          Home
        </NavLink>
      </li>
      <li id="menu-blog">
        <NavLink to="/blog" className={menuClass}>Blog</NavLink>
      </li>
      <li id="menu-college">
        <NavLink to="/401" className={menuClass}>My Food</NavLink>
      </li>
      <li id="menu-jobs">
        <NavLink to="/403" className={menuClass}>Browse Food</NavLink>
      </li>
      <li id="menu-contact">
        <NavLink to="/faq" className={menuClass}>Faq</NavLink>
      </li>
      <li id="menu-about">
        <NavLink to="/makananTersedia" className={menuClass}>Makanan tersedia</NavLink>
      </li>
    </ul>

    {/* Tombol Login dan Register */}
    <div id="navbar-buttons" className="space-x-3">
      <button
        id="btn-login"
        className="px-4 py-1 border border-[#6f42c1] text-[#6f42c1] rounded-md transition-all duration-200 hover:bg-purple-600 hover:text-white active:bg-purple-800"
      >
        Apply now
      </button>
      <button
        id="btn-register"
        className="bg-[#6f42c1] text-white px-4 py-1 rounded-md transition-all duration-200 hover:bg-purple-600 active:bg-purple-800"
      >
        Sign In
      </button>
    </div>
  </div>
</nav>

  );
}
