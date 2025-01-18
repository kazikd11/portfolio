import React, { useState, useEffect } from 'react'
import ProjectCard from './components/ProjectCard'
import projects from './data/projects.json'
import ProjectWindow from './components/ProjectWindow'

const App = () => {
	const [openedProject, setOpenedProject] = useState(null)
	const [selectedroject, setSelectedProject] = useState(null)
	const [windowPosition, setWindowPostion] = useState(null)

	const handleCardDoubleClick = (proj, pos) => {
		setOpenedProject(proj)
		setWindowPostion(pos)
	};

	const handleCardSingleClick = (proj) => {
		console.log('single')
		setSelectedProject(proj)
	};

	const handleCloseProject = () => {
		setOpenedProject(null)
	};

	return (
		<div className="min-h-screen bg-tertiary p-6">
			<h1 className="text-3xl font-bold text-center mb-8">Moje Projekty</h1>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						project={project}
						onSingleClick={() => {
							handleCardSingleClick(project)
						}}
						onDoubleClick={(pos) => {
							handleCardDoubleClick(project, pos)
						}}

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