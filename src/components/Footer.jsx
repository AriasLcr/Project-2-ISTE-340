/**
 * Footer component that displays a footer section with various links and information.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered footer component.
 */

import React, { useState, useEffect } from "react";
import getData from "../utils/getData";

const Footer = () => {
    const [footer, setFooter] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getData("footer/")
            .then((json) => {
                setFooter(json);
                setLoaded(true);
            });
    }, []);

    if (!loaded) {
        return (
            <div className="flex w-full justify-center items-center">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <footer className="bg-black mt-32">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                {/* Main Links */}
                <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
                    <div>
                        <p className="font-medium text-2xl text-orange-500">RIT</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#About" className="text-orange-500 transition">About</a>
                            </li>
                            <li>
                                <a href="#People" className="text-orange-500 transition">People</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-2xl text-orange-500">Academics</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#Degrees" className="text-orange-500 transition">Degrees</a>
                            </li>
                            <li>
                                <a href="#Minors" className="text-orange-500 transition">Minors</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-2xl text-orange-500">Careers</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#Employment" className="text-orange-500 transition">Employment</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-2xl text-orange-500">{footer.social.title}</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href={footer.social.twitter} className="text-orange-500 transition" target="_blank" rel="noopener noreferrer">Twitter</a>
                            </li>
                            <li>
                                <a href={footer.social.facebook} className="text-orange-500 transition" target="_blank" rel="noopener noreferrer">Facebook</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="font-medium text-2xl text-orange-500">Quick Links</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            {footer.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-500 transition"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="w-full flex flex-col items-center text-center space-y-4">
                    <p className="text-white">{footer.social.tweet}</p>
                    <p className="text-orange-500">{footer.social.by}</p>
                </div>

                {/* Copyright */}
                <div
                    className="text-center text-sm text-gray-400 mt-8"
                    dangerouslySetInnerHTML={{ __html: footer.copyright.html }}
                ></div>

                {/* Credits */}
                <div className="w-full flex flex-row justify-center space-x-60 text-white">
                    <p>Gabriel Arias</p>
                    <p>Rochester Institute of Technology</p>
                    <p>ISTE 340</p>
                    <p>Fall 2024</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
