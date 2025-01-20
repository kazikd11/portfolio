import React from 'react';
import { motion } from 'framer-motion';

const ProjectWindow = ({ project, position, onClose }) => {
    if (!position) return null;

    const { x, y, width, height } = position;

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-quaternary shadow-xl rounded-lg overflow-hidden"
                style={{
                    position: 'absolute',
                }}
                initial={{
                    top: y,
                    left: x,
                    width: width,
                    height: height,
                }}
                animate={{
                    top: '50%',
                    left: '50%',
                    translateY: '-50%',
                    translateX: '-50%',
                    scale: (window.innerWidth * 0.95) / width,
                }}
                transition={{
                    duration: 1,
                    ease: [1,0,.9,1]

                }}

                onClick={(e) => e.stopPropagation()}
            >
                <iframe
                    src={project.url}
                    title={project.name}
                    className="w-full h-full"
                    allowFullScreen
                ></iframe>
            </motion.div>
        </motion.div>
    );
};

export default ProjectWindow;
