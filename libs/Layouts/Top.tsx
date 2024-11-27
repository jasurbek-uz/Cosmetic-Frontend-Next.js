import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import { useRouter, withRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { getJwtToken, logOut, updateUserInfo } from "../auth";
import { Stack, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { CaretDown } from "phosphor-react";
import Link from "next/link";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useReactiveVar } from "@apollo/client";
import { Logout } from "@mui/icons-material";
import { REACT_APP_API_URL } from "../types/config";

const Top = () => {
	const { t, i18n } = useTranslation("common");
	const router = useRouter();
	const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
	const [lang, setLang] = useState<string | null>("en");
	const drop = Boolean(anchorEl2);
	const [colorChange, setColorChange] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState<any | HTMLElement>(null);
	let open = Boolean(anchorEl);
	const [bgColor, setBgColor] = useState<boolean>(false);
	const [logoutAnchor, setLogoutAnchor] = React.useState<null | HTMLElement>(
		null
	);
	const logoutOpen = Boolean(logoutAnchor);

	/** LIFECYCLES **/
	useEffect(() => {
		if (localStorage.getItem("locale") === null) {
			localStorage.setItem("locale", "en");
			setLang("en");
		} else {
			setLang(localStorage.getItem("locale"));
		}
	}, [router]);

	useEffect(() => {
		switch (router.pathname) {
			case "/property/detail":
				setBgColor(true);
				break;
			default:
				break;
		}
	}, [router]);

	useEffect(() => {
		const jwt = getJwtToken();
		if (jwt) updateUserInfo(jwt);
	}, []);

	/** HANDLERS **/
	const langClick = (e: any) => {
		setAnchorEl2(e.currentTarget);
	};

	const langClose = () => {
		setAnchorEl2(null);
	};

	const langChoice = useCallback(
		async (e: any) => {
			setLang(e.target.id);
			localStorage.setItem("locale", e.target.id);
			setAnchorEl2(null);
			await router.push(router.asPath, router.asPath, { locale: e.target.id });
		},
		[router]
	);

	const changeNavbarColor = () => {
		if (window.scrollY >= 50) {
			setColorChange(true);
		} else {
			setColorChange(false);
		}
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleHover = (event: any) => {
		if (anchorEl !== event.currentTarget) {
			setAnchorEl(event.currentTarget);
		} else {
			setAnchorEl(null);
		}
	};

	const StyledMenu = styled((props: MenuProps) => (
		<Menu
			elevation={0}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			{...props}
		/>
	))(({ theme }) => ({
		"& .MuiPaper-root": {
			top: "109px",
			borderRadius: 6,
			marginTop: theme.spacing(1),
			minWidth: 160,
			color:
				theme.palette.mode === "light"
					? "rgb(55, 65, 81)"
					: theme.palette.grey[300],
			boxShadow:
				"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
			"& .MuiMenu-list": {
				padding: "4px 0",
			},
			"& .MuiMenuItem-root": {
				"& .MuiSvgIcon-root": {
					fontSize: 18,
					color: theme.palette.text.secondary,
					marginRight: theme.spacing(1.5),
				},
				"&:active": {
					backgroundColor: alpha(
						theme.palette.primary.main,
						theme.palette.action.selectedOpacity
					),
				},
			},
		},
	}));

	if (typeof window !== "undefined") {
		window.addEventListener("scroll", changeNavbarColor);
	}

		return (
			<Stack className={"top"}>
				<Link href={"/"}>
					<div>{t("Home")}</div>
				</Link>
				<Link href={"/property"}>
					<div>{t("Properties")}</div>
				</Link>
				<Link href={"/agent"}>
					<div> {t("Agents")} </div>
				</Link>
				<Link href={"/community?articleCategory=FREE"}>
					<div> {t("Community")} </div>
				</Link>
				<Link href={"/cs"}>
					<div> {t("CS")} </div>
				</Link>
			</Stack>
		);

		
};

export default withRouter(Top);
