import React, { useState } from "react";

import Head from "next/head";

import axios from "axios";
import { baseURL } from "../utils";

import { useForm, Controller } from "react-hook-form";

import { Typography, Box, TextField, Tooltip, IconButton, Snackbar } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";

import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const defaultValues = {
	Name: "",
	Email: "",
	Message: ""
};

function Contact() {
	const [messageStatus, setMessageStatus] = useState<{
		flag: AlertColor;
		status: boolean;
	}>({ flag: "error", status: false });

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({ defaultValues });

	const onSocialMediaClick = (url: string | URL) => {
		window.open(url, "_blank");
	};

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}

		setMessageStatus((state) => ({ ...state, status: false }));
	};

	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name="description" content="You can contact me either through e-email or social media." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Typography className="layout-title" variant="h2" gutterBottom>
				CONTACT
			</Typography>
			<form
				className="contact-form"
				onSubmit={handleSubmit((data: { Email: any; Name: any; Message: any }) => {
					setMessageStatus({ flag: "info", status: true });
					axios
						.post(`${baseURL}/contact/`, {
							name: `${data.Email} - ${data.Name}`,
							email: data.Email,
							message: data.Message
						})
						.then(() => {
							setMessageStatus({ flag: "success", status: true });
						})
						.catch(() => {
							setMessageStatus({ flag: "error", status: true });
						});
				})}
			>
				<Box
					component="div"
					sx={{
						display: "flex",
						flexDirection: "column"
					}}
				>
					<Controller
						rules={{ required: true }}
						render={({ field }: any) => (
							<TextField
								{...field}
								id="name"
								label="Name"
								variant="outlined"
								margin="dense"
								error={errors?.Name}
								helperText={errors?.Name ? "No name was given" : ""}
							/>
						)}
						name="Name"
						control={control}
					/>
					<Controller
						rules={{ required: true, pattern: /^\S+@\S+$/i }}
						render={({ field }: any) => (
							<TextField
								{...field}
								id="email"
								label="Email"
								variant="outlined"
								margin="dense"
								error={errors?.Email}
								helperText={errors?.Email ? "Invalidate e-mail" : ""}
							/>
						)}
						name="Email"
						control={control}
					/>
					<Controller
						rules={{ required: true }}
						render={({ field }: any) => (
							<TextField
								{...field}
								id="message"
								label="Message"
								variant="outlined"
								margin="dense"
								multiline
								minRows={6}
								maxRows={8}
								error={errors?.Message}
								helperText={errors?.Message ? "No message was given" : ""}
							/>
						)}
						name="Message"
						control={control}
					/>
				</Box>
				<div style={{ marginTop: "1rem" }}>
					<IconButton
						className="contact-social-media"
						color="primary"
						onClick={() => onSocialMediaClick("https://twitter.com/ge_karampelas")}
					>
						<TwitterIcon style={{ color: "#FFF" }} />
					</IconButton>
					<IconButton
						className="contact-social-media"
						color="primary"
						onClick={() => onSocialMediaClick("https://github.com/GeorgeCodeHub")}
					>
						<GitHubIcon style={{ color: "#FFF" }} />
					</IconButton>
					<IconButton
						className="contact-social-media"
						color="primary"
						onClick={() => onSocialMediaClick("https://www.linkedin.com/in/george-karampelas-453598137/")}
					>
						<LinkedInIcon style={{ color: "#FFF" }} />
					</IconButton>
					<LoadingButton
						style={{ float: "right", marginTop: 3 }}
						type="submit"
						variant="contained"
						loading={messageStatus.status}
						endIcon={<SendIcon />}
						loadingPosition="end"
					>
						SEND
					</LoadingButton>
				</div>
			</form>
			<Snackbar open={messageStatus.status} autoHideDuration={6000} onClose={handleClose}>
				<Alert severity={messageStatus.flag}>
					{messageStatus.flag === "success"
						? "Message was sent successfully!"
						: messageStatus.flag === "info"
						? "Trying to make contact..."
						: "Something went wrong. Please try again later!"}
				</Alert>
			</Snackbar>
		</>
	);
}

export default React.memo(Contact);
