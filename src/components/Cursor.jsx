import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const SimulatedCursor = ({ buttonRef }) => {
    const controls = useAnimation();

    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const simulateMouseMovements = async () => {

			await controls.start({
                x: 330,
                y: 35,
                transition: { duration: 0 },
            });

			await controls.start({
				opacity: 1,
                transition: { duration: 0.5 },
            });

            await new Promise((resolve) => setTimeout(resolve, 1000));

            let buttonRect = buttonRef.current.getBoundingClientRect();

            await controls.start({
                x: buttonRect.left,
                y: buttonRect.top+10,
                transition: { duration: 0.5 },
            });

            await new Promise((resolve) => setTimeout(resolve, 200));
			handleSetIsPointer();
            await new Promise((resolve) => setTimeout(resolve, 100));
			handleSetIsPointer();
            await new Promise((resolve) => setTimeout(resolve, 200));

            triggerClick(buttonRect.left, buttonRect.top);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            buttonRect = buttonRef.current.getBoundingClientRect();

            await controls.start({
                x: buttonRect.left,
                y: buttonRect.top+10,
                transition: { duration: 0.5 },
            });

            await new Promise((resolve) => setTimeout(resolve, 200));
			handleSetIsPointer();
            await new Promise((resolve) => setTimeout(resolve, 100));
			handleSetIsPointer();
            await new Promise((resolve) => setTimeout(resolve, 200));
            triggerClick(buttonRect.left, buttonRect.top);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            await controls.start({
                x: buttonRect.left - 50,
                y: buttonRect.top,
                transition: { duration: 0.5 },
            });
			handleSetIsPointer();
            await new Promise((resolve) => setTimeout(resolve, 100));
			handleSetIsPointer();
            await new Promise((resolve) => setTimeout(resolve, 100));
			handleSetIsPointer();
            await new Promise((resolve) => setTimeout(resolve, 100));
			handleSetIsPointer();
            await new Promise((resolve) => setTimeout(resolve, 200));
            triggerDoubleClickEvent(buttonRect.left - 50, buttonRect.top);

            await controls.start({
                opacity: 0,
                transition: { duration: 0.5 },
            });
        };

        simulateMouseMovements();
    }, [controls, buttonRef]);

    const triggerClick = (x, y) => {
        const element = document.elementFromPoint(x, y);
        if (element) {
            element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    };

    const triggerDoubleClickEvent = (x, y) => {
        const element = document.elementFromPoint(x, y);
        if (element) {
            element.dispatchEvent(
                new MouseEvent("dblclick", { bubbles: true })
            );
        }
    };


	const handleSetIsPointer = () => {
		setIsPointer((x) => !x);
	}

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 opacity-0"
            viewBox="0 0 50 50"
            animate={controls}
        >
            {isPointer ? (
                <svg
                    viewBox="0 0 32 32"
                    fill="white"
                    stroke="black"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                >
                    <path d="M15,12L15,12c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v4" />
                    <path d="M19,16v-4c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v4" />
                    <path d="M15,16V5c0-1.1-0.9-2-2-2s-2,0.9-2,2v14.2l-2.6-2.6c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l8.2,8.1c1.2,0.9,2.7,1.5,4.4,1.5h1.7c4,0,7.2-3.2,7.2-7.2V14c0-1.1-0.9-2-2-2s-2,0.9-2,2v2" />
                </svg>
            ) : (
                <svg viewBox="0 0 50 50">
                    <path
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M15,6l24,22.4l-11.6,1l6.7,14.6L29.7,46l-6.4-14.8L15,39L15,6"
                    />
                </svg>
            )}
        </motion.div>
    );
};

export default SimulatedCursor;
