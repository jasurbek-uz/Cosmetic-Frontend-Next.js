import { Stack } from "@mui/material";
import Head from "next/head";
import { Component } from "react";
import React, { useEffect } from "react";
import Top from "../Top";
import Footer from "../Footer";
import FiberContainer from "../common/FiberContainer";
import HeaderFilter from "../homepage/HeaderFilter";
import { userVar } from "../../../apollo/store";
import { useReactiveVar } from "@apollo/client";
import { getJwtToken, updateUserInfo } from "../../auth";
import Chat from "../Chat";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const LayoutHome = (Component: any) => {
	return (props: any) => {
		const user = useReactiveVar(userVar);

		/** LIFECYCLES **/
		useEffect(() => {const jwt = getJwtToken();if (jwt) updateUserInfo(jwt);}, []);

		/** HANDLERS **/

			return (
				<>
					<Head>
						<title>Taffi</title>
						<meta name={"title"} content={`Taffi`} />
					</Head>
					<Stack id="pc-wrap">
						<Stack id={"top"}>
							<Top />
						</Stack>

						<Stack className={"header-main"}>
							<FiberContainer />
							<Stack className={"container"}>
								<HeaderFilter />
							</Stack>
						</Stack>

						<Stack id={"main"}>
							<Component {...props} />
						</Stack>

						<Chat />

						<Stack id={"footer"}>
							<Footer />
						</Stack>
					</Stack>
				</>
			);
		}
	};

export default LayoutHome;