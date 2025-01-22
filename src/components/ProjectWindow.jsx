import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ProjectIframe from "./ProjectIframe";

const ProjectWindow = ({ project, position, onClose }) => {
    if (!position) return null;

    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);

    const { x, y, width, height } = position;

    const handleAnimationComplete = () => {
        setIsAnimationComplete(true);
    };

    const handleIframeLoad = () => {
        setIsIframeLoaded(true);
    };

    return (
        <>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-70 z-40"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            ></motion.div>
            {!isIframeLoaded && (
                <motion.img
                    className="rounded-lg fixed z-50 object-cover"
                    src={project.image}
                    initial={{
                        top: y,
                        left: x,
                        width: width,
                        height: height,
                    }}
                    animate={{
                        top: "50%",
                        left: "50%",
                        translateY: "-50%",
                        translateX: "-50%",
                        scale: window.innerWidth * 0.95 / width,
                    }}
                    transition={{
                        duration: 1,
                        ease: [1, 0, 0.9, 1],
                    }}
                    onAnimationComplete={handleAnimationComplete}
                    onClick={(e) => e.stopPropagation()}
                />
            )}

            {isAnimationComplete && 
                <ProjectIframe onLoad={handleIframeLoad} project={project} onClose={onClose}></ProjectIframe>
            }
        </>
    );
};

export default ProjectWindow;
