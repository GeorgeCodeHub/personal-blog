import React, { useState } from "react";

import Head from "next/head";

import { Typography, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/styles";

import { baseURL, projectFilters } from "../utils";
import { projectType } from "../utils/types";
import ProjectCard from "../components/ProjectCard";

const color = "#4FBDBA !important";

const useStyles: any = makeStyles(() => ({
	select: {
		"&:before": {
			borderColor: color
		},
		"&:after": {
			borderColor: color
		}
	},
	icon: {
		transform: "scale(2)",
		fill: color
	},

	menuPaper: {
		maxHeight: "200px !important",
		background: "#072227"
	},
	selectItem: {
		backgroundColor: "#4FBDBA !important"
	},
	menuList: {
		background: "#072227"
	}
}));

function Projects({ projects }: { projects: projectType[] }) {
	const classes = useStyles();

	const [selectedFilter, setSelectedFilter] = useState("All");

	const handleSelectedChange = (event: SelectChangeEvent) => {
		setSelectedFilter(event.target.value as string);
	};

	return (
		<>
			<Head>
				<title>Projects</title>
				<meta name="description" content="A list of all personal projects that I have worked on over the years." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Typography className="layout-title" variant="h2" gutterBottom>
				<Select
					value={selectedFilter}
					onChange={handleSelectedChange}
					variant="standard"
					renderValue={(selected) => (
						<Typography className="title-select" variant="h2">
							{selected}
						</Typography>
					)}
					className={classes.select}
					inputProps={{
						classes: {
							icon: classes.icon
						}
					}}
					MenuProps={{
						classes: { paper: classes.menuPaper, list: classes.menuList }
					}}
					style={{ pointerEvents: "auto", userSelect: "auto" }}
				>
					{projectFilters.map((item: string) => (
						<MenuItem key={item} value={item} classes={{ selected: classes.selectItem }}>
							<Typography className="title-select" variant="h4">
								{item}
							</Typography>
						</MenuItem>
					))}
				</Select>
				PROJECTS
			</Typography>
			<div className="projects-container">
				{projects
					.filter((item: { technologies: string[] }) => {
						if (selectedFilter === "All") return true;
						else return item.technologies.some((item: string) => item === selectedFilter);
					})
					.map((project: projectType, index) => (
						<ProjectCard key={index} project={project} />
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
