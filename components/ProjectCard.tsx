import React from "react";

import { projectType } from "../utils/types";

function ProjectCard({ project }: { project: projectType }) {
	const onProjectClick = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<div
			className="projects-item"
			onClick={() => {
				onProjectClick(project.githubURL);
			}}
		>
			<img src={project.images[0]} alt={project.title} width={125} />
			<div>
				<div className="projects-title">{project.title}</div>

				<div className="projects-description">{project.description}</div>
				<div className="projects-tag-container">
					{project.technologies.map((tech, index) => (
						<div key={index} className="projects-tag">
							{tech}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
