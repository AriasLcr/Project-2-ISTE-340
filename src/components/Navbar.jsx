const Navbar = () => {
    const links = [
        { href: "About", label: "About" },
        { href: "Degrees", label: "Degrees" },
        { href: "Minors", label: "Minors" },
        { href: "Employment", label: "Employment" },
        { href: "People", label: "People" },
    ];

    const linkClass = "text-white hover:bg-white hover:text-black";

    return (
        <nav className="flex flex-row space-x-10 justify-center w-full text-2xl bg-black py-5 sticky top-0 z-50">
            {links.map((link) => (
                <a
                    key={link.href}
                    href={`#${link.href}`}
                    className={`${linkClass} ml-4`} // Adds a left margin of 1rem
                >
                    {link.label}
                </a>
            ))}
        </nav>
    );
};

export default Navbar;
