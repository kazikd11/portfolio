import { useState, useRef, useEffect } from 'react';
import ProjectSection from './components/ProjectSection';
import ProjectWindow from './components/ProjectWindow';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';

const App = () => {


	const buttonRef = useRef(null);

	const [openedProject, setOpenedProject] = useState(null);
	const [windowPosition, setWindowPostion] = useState(null);
	const [sections, setProjects] = useState([]);

	useEffect(() => {
		fetch("/projects.json")
		  .then((res) => res.json())
		  .then((data) => setProjects(data));
	  }, []);

	const handleCardDoubleClick = (proj, pos) => {
		setOpenedProject(proj);
		setWindowPostion(pos);
	};

	const handleCloseProject = () => {
		setOpenedProject(null);
	};

	return (
		<div className="min-h-screen bg-primary relative">
			<div className="absolute inset-0 bg-custom-image opacity-20 z-0"></div>
			
			{(window.self === window.top) && <Cursor buttonRef={buttonRef}/>}
			
			<Navbar />

			<div className="custom-scroll overflow-auto h-[100vh] pt-8 pb-20 relative z-10">
				{sections.map((section, i) => (
					<ProjectSection
						key={i}
						title={section.title}
						projects={section.projects}
						handleCardDoubleClick={handleCardDoubleClick}
						buttonRef={i === 0 ? buttonRef : null}
					/>
				))}
			</div>

			{openedProject && (
				<ProjectWindow project={openedProject} position={windowPosition} onClose={handleCloseProject} />
			)}
		</div>
	);
};

export default App;