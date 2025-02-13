import { motion } from "framer-motion";

const icons = Object.values(
    import.meta.glob("../assets/svg/*.svg", {
        eager: true,
        import: "default",
        query: "?react",
    })
);

const addicons = Object.values(
    import.meta.glob("../assets/svgadd/*.svg", {
        eager: true,
        import: "default",
        query: "?react",
    })
);

const Icons = () => {
    return (
        <div className="flex gap-4 hidden lg:flex">
            {icons.map((Component, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                    <motion.div whileHover={{ scale: 1.3 }}>
                        <Component className="w-12 h-12 stroke-quaternary" />
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default Icons;
