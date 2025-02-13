import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectSection = ({ projects, title, handleCardDoubleClick, buttonRef }) => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-center mb-3">{title}</h2>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center p-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            buttonRef={project.id === 1 ? buttonRef : null}
            onDoubleClick={(pos) => {
              handleCardDoubleClick(project, pos);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
