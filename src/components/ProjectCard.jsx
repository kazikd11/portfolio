import React from 'react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ProjectCard = ({ project, onDoubleClick }) => {
    const [showInfo, setShowInfo] = useState(false);
    const imgRef = useRef(null);

    const handleDoubleClick = () => {
        if (showInfo) return;
        const rect = imgRef.current.getBoundingClientRect();
        onDoubleClick(rect);
    }

    const handleInfo = () => {
        setShowInfo((x) => !x);
    }

    return (
        <motion.div
            className="bg-tertiary shadow-lg rounded-lg p-0 cursor-pointer overflow-hidden w-[45vw] lg:w-[30vw]"
            whileHover={{ scale: 1.05 }}
            onDoubleClick={handleDoubleClick}
        >
            <div className="w-[45vw] h-[45vh] lg:w-[30vw] lg:h-[30vh]">
                {!showInfo ?
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showInfo ? 0 : 1 }}
                        transition={{ duration: 0.5 }}
                        className="object-none w-full h-full"
                        src={project.image}
                        alt={project.name}
                        ref={imgRef}
                    />
                    :
                    <motion.p
                        className="flex-grow overflow-auto w-full h-full p-4 custom-scroll"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showInfo ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {project.longDescription}
                    </motion.p>
                }
            </div>
            <div className="flex bg-primary p-4 items-center justify-between">
                <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
                <button onClick={handleInfo}>
                    {showInfo ? <XMarkIcon className="w-6 h-6" /> : <InformationCircleIcon className="w-6 h-6" />}
                </button>
            </div>
        </motion.div>

    );
};

export default ProjectCard;
