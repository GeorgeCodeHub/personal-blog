import React, { useState } from "react";

import { Grid, Stack, Divider, Typography } from "@mui/material";

import Tooltip from "@mui/material/Tooltip";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";

import Link from "next/link";

const breakpointsNavBarTriangles = {
	width: {
		xs: 0, // theme.breakpoints.up('xxs')
		sm: 0, // theme.breakpoints.up('sm')
		md: 60, // theme.breakpoints.up('md')
		lg: 80, // theme.breakpoints.up('lg')
		xl: 80 // theme.breakpoints.up('xl')
	}
};

function Header() {
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
								<span>RocketCode</span>
							</Typography>
						</Link>
						<Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
							<Link href="/">
								<Tooltip title="Home" placement="bottom">
									<div className="navbar-links">
										<HomeIcon />
									</div>
								</Tooltip>
							</Link>
							<Link href={`/projects`}>
								<Tooltip title="Projects" placement="bottom">
									<div className="navbar-links">
										<CodeIcon />
									</div>
								</Tooltip>
							</Link>
							<Tooltip title="Personal Page" placement="bottom">
								<div
									className="navbar-links"
									onClick={() => {
										window.location.href = "https://georgecodehub.github.io/portfolio/";
									}}
								>
									<PersonIcon />
								</div>
							</Tooltip>
							<Link href={`/contact`}>
								<Tooltip title="Contact" placement="bottom">
									<div className="navbar-links">
										<EmailIcon />
									</div>
								</Tooltip>
							</Link>
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
