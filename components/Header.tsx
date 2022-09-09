import React, { useState } from "react";

import { Button, Grid, Stack, Divider, Typography } from "@mui/material";

import BottomNavigation from "@mui/material/BottomNavigation";
import Tooltip from "@mui/material/Tooltip";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import IconButton from "@mui/material/IconButton";

import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CodeIcon from "@mui/icons-material/Code";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import Link from "next/link";

const categories = [
	{ name: "Home", slug: "/" },
	{ name: "Personal Page", slug: "PersonalPage" },
	{ name: "About", slug: "about" }
];

const breakpointsNavBarTriangles = {
	width: {
		xs: 10, // theme.breakpoints.up('xxs')
		sm: 30, // theme.breakpoints.up('sm')
		md: 60, // theme.breakpoints.up('md')
		lg: 80, // theme.breakpoints.up('lg')
		xl: 80 // theme.breakpoints.up('xl')
	}
};

const breakpointsButtons = {
	width: {
		xs: 30, // theme.breakpoints.up('xxs')
		md: 50, // theme.breakpoints.up('md')
		lg: 70, // theme.breakpoints.up('lg')
		xl: 90 // theme.breakpoints.up('xl')
	}
};

const useStyles = makeStyles(({ breakpoints }: any) => ({
	root: {
		minWidth: "20px !important",
		maxWidth: 90
	},
	tooltip: {
		fontSize: "1em"
	}
}));

function Header() {
	const [navKey, setNavKey] = useState("");

	const classes = useStyles();

	const onNavBarChange = (event: React.SyntheticEvent, newValue: React.SetStateAction<string>) => {
		setNavKey(newValue);
	};

	return (
		<Grid className="navbar-container" container spacing={2}>
			<Grid item xs={12}>
				<Grid container justifyContent="center" spacing={0}>
					<Grid item sx={breakpointsNavBarTriangles}>
						<div className="navbar-triangle-left" />
					</Grid>
					<Grid className="navbar-center" item>
						<Link href="/">
							<Typography className="navbar-logo" variant="h6">
								<RocketLaunchIcon />
								<span>RocketCode Blog</span>
							</Typography>
						</Link>
						<Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
							{categories.map((category, index) => (
								<div key={index} className="navbar-links">
									<Link key={index} href={`/category/${category.slug}`}>
										<span>{category.name}</span>
									</Link>
								</div>
							))}
						</Stack>
					</Grid>

					<Grid item sx={breakpointsNavBarTriangles}>
						<div className="navbar-triangle-right" />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Header;
