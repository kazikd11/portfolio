import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import  HtmlIcon from '../assets/HtmlIcon.svg?react';

const Navbar = () => {
    return (
        <nav className="bg-primary flex items-center justify-between text-3xl font-bold p-4 sticky w-full z-10">
            <motion.p whileHover={{ scale: 1.1 }} className="ml-2">Michał Kaźmierczak</motion.p>
            <div className="flex space-x-4">
                
          
            <HtmlIcon width={100} height={100} className="stroke-white"/>
          
          
          
            </div>
            <div className="flex space-x-4">
                <a
                    href="https://github.com/kazikd11"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="icon hover:text-gray-500" />
                </a>
                <a
                    href="https://www.linkedin.com/in/kazikd11"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="icon hover:text-blue-400" />
                </a>
                <a
                    href="/BlankCV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFilePdf className="icon hover:text-red-500" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
