import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, onDoubleClick, buttonRef }) => {
    const [showInfo, setShowInfo] = useState(false);
    const imgRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    const descriptionRef = useRef(null);


    const handleDoubleClick = () => {
        if (!showInfo && project.url) {
            const rect = imgRef.current.getBoundingClientRect();
            onDoubleClick(rect);
        }
    };

    const handleInfo = () => {
        setShowInfo((x) => !x);
    };

    useEffect(() => {
        if (descriptionRef.current) {
            setContentHeight(descriptionRef.current.scrollHeight);
        }
    }, [showInfo]);

    return (
        <motion.div
            className="bg-primary shadow-lg rounded-lg p-0 overflow-hidden w-[45vw] lg:w-[30vw] relative"
            whileHover={{ scale: 1.05 }}
        >
            <div className="w-[45vw] h-[45vh] lg:w-[30vw] lg:h-[30vh]">
                <motion.img
                    className={`object-cover w-full h-full ${project.url? "cursor-pointer" : "cursor-not-allowed"}`}
                    src={project.image}
                    alt={project.name}
                    ref={imgRef}
                    onDoubleClick={handleDoubleClick}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: showInfo ? 0.5 : 1 }}
                />
            </div>
            <motion.div className="bg-primary absolute bottom-0 w-full max-h-[100%]">
                <div className="flex p-4 items-center justify-between">
                    <div>
                        <p className="font-bold">{project.name}</p>
                        <p>{project.description}</p>
                    </div>
                    <div className="flex items-center space-x-4 pr-1">
                        {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="w-6 h-6 cursor-pointer" />
                        </a>
                        )}
                        <button onClick={handleInfo} ref={buttonRef}>
                            {showInfo ? (
                                <XMarkIcon className="w-7 h-7 cursor-pointer" />
                            ) : (
                                <InformationCircleIcon className="w-7 h-7 cursor-pointer" />
                            )}
                        </button>
                    </div>
                </div>
                <AnimatePresence>
                    {showInfo && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: contentHeight }}
                            exit={{ height: 0 }}
                            transition={{duration: 0.5}}
                        >
                            <p className="p-4 pt-0" ref={descriptionRef}>
                                {project.longDescription}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            <div className="p-4">
                <p className="font-bold">X</p>
                <p>X</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
