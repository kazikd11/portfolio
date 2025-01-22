import React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, onDoubleClick }) => {
    const [showInfo, setShowInfo] = useState(false);
    const imgRef = useRef(null);

    const handleDoubleClick = () => {
        const rect = imgRef.current.getBoundingClientRect();
        onDoubleClick(rect);
    };

    const handleInfo = () => {
        setShowInfo((x) => !x);
    };

    return (
        <motion.div
            className="bg-tertiary shadow-lg rounded-lg p-0 overflow-hidden w-[45vw] lg:w-[30vw]"
            whileHover={{ scale: 1.05 }}
        >
            <div className="w-[45vw] h-[45vh] lg:w-[30vw] lg:h-[30vh]">
                {!showInfo ? (
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showInfo ? 0 : 1 }}
                        transition={{ duration: 0.5 }}
                        className="object-cover w-full h-full cursor-pointer"
                        src={project.image}
                        alt={project.name}
                        ref={imgRef}
                        onDoubleClick={handleDoubleClick}
                    />
                ) : (
                    <motion.div
                        className="flex flex-col gap-4 overflow-auto w-full h-full p-4 custom-scroll"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showInfo ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>
                            <p className="font-bold text-lg text-center">About</p>
                            <p>{project.longDescription}</p>
                        </div>
                        <div>
                            <p className="font-bold text-mg text-center">Tech stack</p>
                            <ul className="list-none  pl-2 leading-tight ">
                                {project.technologies.map((tech, i) => (
                                    <li
                                        key={i}
                                        className="before:content-bullet before:mr-2"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-lg">Comment</p>
                            <p>{project.annotation}</p>
                        </div>
                    </motion.div>
                )}
            </div>
            <div className="flex bg-primary p-4 items-center justify-between">
                <div>
                    <p className="font-bold">{project.name}</p>
                    <p>{project.description}</p>
                </div>
                <div className="flex items-center space-x-4 pr-1">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="w-6 h-6 cursor-pointer" />
                    </a>
                    <button onClick={handleInfo}>
                        {showInfo ? (
                            <XMarkIcon className="w-7 h-7 cursor-pointer" />
                        ) : (
                            <InformationCircleIcon className="w-7 h-7 cursor-pointer" />
                        )}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
