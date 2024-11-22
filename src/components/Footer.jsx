import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black mt-32">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div
                className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16"
                >
                    <div>
                        <p className="font-medium text-2xl text-orange-500">RIT</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#About" className="text-orange-500 transition"> About </a>
                            </li>

                            <li>
                                <a href="#People" className="text-orange-500 transition"> People </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-2xl text-orange-500">Academics</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#Degrees" className="text-orange-500 transition"> Degrees </a>
                            </li>

                            <li>
                                <a href="#Minors" className="text-orange-500 transition"> Minors </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-2xl text-orange-500">Careers</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#Employment" className="text-orange-500 transition"> Employment </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="w-full flex flex-row justify-center space-x-60">
                    <p className="text-white">Gabriel Arias</p>
                    <p className="text-white">Rochester Institute of Technology</p>
                    <p className="text-white">ISTE 340</p>
                    <p className="text-white">Fall 2024</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;