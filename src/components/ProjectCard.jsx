import React from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onDoubleClick, onSingleClick }) => {
    const imgRef = useRef(null);

    const handleDoubleClick = () => {
        const rect = imgRef.current.getBoundingClientRect();
        onDoubleClick(rect);
    }

    return (
        <motion.div
            className="bg-white shadow-lg rounded-lg p-0 cursor-pointer w-[45vw] lg:w-[30vw]"
            whileHover={{ scale: 1.05 }}
            onDoubleClick={handleDoubleClick}
            onClick={onSingleClick}
        >
            <img
                className="object-none w-[45vw] h-[45vh] lg:w-[30vw] lg:h-[30vh]"
                src={project.image}
                alt={project.name}
                ref={imgRef}
            />
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
        </motion.div>
    );
};

export default ProjectCard;
