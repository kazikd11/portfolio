import React from "react";
import { useRef } from "react";
import { IoReloadCircle, IoCloseCircle  } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";


const ProjectIframe = ({ onLoad, project, onClose }) => {
    const iframeRef = useRef(null);

    const handleReload = () => {
        if (iframeRef.current) {
            iframeRef.current.src = iframeRef.current.src;
        }
    };

    const handleOpenInNewTab = () => {
        window.open(project.url, "_blank");
    };
    return (
        <div className="fixed w-[95vw] h-[95vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-none shadow-xl overflow-hidden z-40">
            <div className="absolute flex flex-row-reverse items-center gap-2 p-2 bg-none w-full z-60">
                <button
                    className="p-2 opacity-50 hover:opacity-100 bg-primary rounded-full"
                    onClick={handleReload}
                >
                    <IoReloadCircle className="h-6 w-6"/>
                </button>

                <button
                    className="p-2.5 bg-primary opacity-50 hover:opacity-100 rounded-full"
                    onClick={handleOpenInNewTab}
                >
                    <FaExternalLinkSquareAlt className="h-5 w-5" />
                </button>

                <button
                    className="p-2 bg-primary opacity-50 hover:opacity-100 rounded-full"
                    onClick={onClose}
                >
                    <IoCloseCircle className="h-6 w-6"
                    />
                </button>
            </div>
            <iframe
                ref={iframeRef}
                src={project.url}
                title={project.name}
                className="w-full h-full rounded-[1.5rem] overflow-hidden"
                onLoad={onLoad}
            ></iframe>
        </div>
    );
};

export default ProjectIframe;
