/**
 * Navbar component that displays a navigation bar with links.
 * It includes a mobile menu that can be toggled and a desktop menu.
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 */

import React, { useState } from "react";
import { Icon } from "semantic-ui-react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("About");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "About", label: "About" },
    { href: "Degrees", label: "Degrees" },
    { href: "Minors", label: "Minors" },
    { href: "Employment", label: "Employment" },
    { href: "People", label: "People" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      {/* Mobile Menu Button */}
      <div className="flex items-center justify-between px-4 py-2 sm:hidden">
        <button
          className="text-white text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Icon name={isMobileMenuOpen ? "close" : "bars"} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-black w-full">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li
                key={link.href}
                className={`w-full px-4 py-2 text-left ${
                  activeItem === link.label
                    ? "bg-gray-700 text-orange-400"
                    : "hover:bg-gray-800"
                }`}
                onClick={() => {
                  setActiveItem(link.label);
                  setMobileMenuOpen(false); // Close menu after clicking
                }}
              >
                <a href={`#${link.href}`} className="block w-full text-white hover:text-orange-500">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden sm:flex justify-center bg-black py-3">
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                onClick={() => setActiveItem(link.label)}
                className={`px-4 py-2 ${
                  activeItem === link.label
                    ? "text-orange-400"
                    : "text-white hover:text-orange-300"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
