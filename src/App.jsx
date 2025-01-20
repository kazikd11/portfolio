import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

import ProjectSection from './components/ProjectSection'
import ProjectWindow from './components/ProjectWindow'

import sections from './data/projects.json'


const App = () => {
	const [openedProject, setOpenedProject] = useState(null)
	const [windowPosition, setWindowPostion] = useState(null)

	const handleCardDoubleClick = (proj, pos) => {
		setOpenedProject(proj)
		setWindowPostion(pos)
	};

	const handleCloseProject = () => {
		setOpenedProject(null)
	};

	return (
		<div className="min-h-screen bg-secondary">

			<nav className="bg-primary flex items-center justify-between text-3xl font-bold p-6 sticky w-full z-10" >
				<p>Michał Kaźmierczak</p>
				<div className="flex space-x-4">
					<a href="https://github.com/kazikd11" target="_blank" rel="noopener noreferrer">
						<FaGithub className="icon hover:text-gray-500" />
					</a>
					<a href="https://www.linkedin.com/in/kazikd11" target="_blank" rel="noopener noreferrer">
						<FaLinkedin className="icon hover:text-blue-400" />
					</a>
					<a href="/BlankCV.pdf" target="_blank" rel="noopener noreferrer">
						<FaFilePdf className="icon hover:text-red-500" />
					</a>
				</div>
			</nav>
			<div className="custom-scroll overflow-auto h-[100vh] pt-8 pb-20" id="main-scroll">
			{sections.map((section, i) => (
				<ProjectSection
					key={i}
					title={section.title}
					projects={section.projects}
					handleCardDoubleClick={handleCardDoubleClick}
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