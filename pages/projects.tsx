import React from "react";

import Head from "next/head";

import { Typography } from "@mui/material";

import { baseURL } from "../utils";
import { projectType } from "../utils/types";

function Projects({ projects }: { projects: projectType[] }) {
	const onProjectClick = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<>
			<Head>
				<title>Projects</title>
				<meta name="description" content="A list of all personal projects that I have worked on over the years." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Typography
				style={{ marginTop: "1.5em", fontWeight: "lighter !important", letterSpacing: "1rem !important" }}
				variant="h2"
				gutterBottom
			>
				PROJECTS
			</Typography>
			<div className="projects-container">
				{projects.map((project: projectType) => (
					<div
						key={project.id}
						className="projects-item"
						onClick={() => {
							onProjectClick(project.githubURL);
						}}
					>
						<img src={project.images[0]} alt={project.title} width={100} />
						<div>
							<div className="projects-title">{project.title}</div>
							<div className="projects-description">{project.description}</div>

							<div style={{ display: "flex", gap: "0.8rem" }}>
								{project.technologies.map((tech) => (
									<div className="projects-tag">{tech}</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default Projects;

export async function getStaticProps() {
	// Get all data from server
	const res = await fetch(`${baseURL}/api/get_all`);
	const { projects } = await res.json();

	return {
		props: {
			projects: projects
		}
	};
}
