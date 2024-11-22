import React, { useState } from 'react';
import { MenuItem, Menu, Icon } from 'semantic-ui-react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('About');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: 'About', label: 'About' },
    { href: 'Degrees', label: 'Degrees' },
    { href: 'Minors', label: 'Minors' },
    { href: 'Employment', label: 'Employment' },
    { href: 'People', label: 'People' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="sm:hidden flex items-center justify-between px-4 py-2">
        <button
          className=" text-white text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Icon name={isMobileMenuOpen ? 'close' : 'bars'} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } bg-black`}
      >
        <Menu vertical inverted>
          {links.map((link) => (
            <MenuItem
              key={link.href}
              name={link.label}
              active={activeItem === link.label}
              onClick={() => {
                setActiveItem(link.label);
                setMobileMenuOpen(false); // Close menu after selection
              }}
              as="a"
              href={`#${link.href}`}
              style={{
                color: activeItem === link.label ? 'orange' : 'white',
              }}
            />
          ))}
        </Menu>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex justify-center bg-black">
        <Menu
            inverted
            pointing
            secondary
            >
            {links.map((link) => (
                <MenuItem
                key={link.href}
                name={link.label}
                active={activeItem === link.label}
                onClick={() => setActiveItem(link.label)}
                as="a"
                href={`#${link.href}`}
                style={{
                    color: activeItem === link.label ? 'orange' : 'white',
                }}
                />
            ))}
        </Menu>
        </div>
    </nav>
  );
};

export default Navbar;
