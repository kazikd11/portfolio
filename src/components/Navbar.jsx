import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import Icons from "./Icons";

const Navbar = () => {
    return (
        <nav className="bg-primary flex items-center justify-between text-3xl font-bold p-4 sticky w-full z-10 h-24 relative">
            <motion.p whileHover={{ scale: 1.1 }} className="ml-4 z-20">
                Michał Kaźmierczak
            </motion.p>
            <div className="absolute left-0 right-0 flex justify-center z-10">
                <Icons />
            </div>
            <div className="flex space-x-4 mr-4 z-20">
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://github.com/kazikd11"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="icon hover:text-gray-500" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://www.linkedin.com/in/kazikd11"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="icon hover:text-blue-400" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="/CV_Michal_Kazmierczak.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFilePdf className="icon hover:text-red-500" />
                </motion.a>
            </div>
        </nav>
    );
};

export default Navbar;
