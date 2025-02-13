import {useState} from "react";

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
    const [showMore, setShowMore] = useState(false);

    const handleMore = () => {
        setShowMore(true);
    };

    return (
        <div className="flex gap-4">
            <div className="flex gap-4">
                {icons.map((Component, i) => (
                    <Component
                        key={i}
                        className="w-12 h-12  stroke-quaternary"
                    />
                ))}
            </div>
            {!showMore && <div onClick={handleMore} className="cursor-pointer flex">
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>
}
			{showMore && <div className="flex gap-4">
				{addicons.map((Component, i) => (
					<Component
						key={i}
						className="w-12 h-12  stroke-quaternary"
					/>
				))}
			</div>}
        </div>
    );
};

export default Icons;
