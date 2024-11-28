import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Top from "../Layouts/Top";
import Footer from "../Layouts/Footer";
import { Stack } from "@mui/material";
import { getJwtToken, updateUserInfo } from "../../libs/auth";
import Chat from "../";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "../../apollo/store";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const withLayoutFull = (Component: any) => {
	return (props: any) => {
		const router = useRouter();
		const user = useReactiveVar(userVar);

		/** LIFECYCLES **/
		useEffect(() => {
			const jwt = getJwtToken();
			if (jwt) updateUserInfo(jwt);
		}, []);

		/** HANDLERS **/

			return (
				<>
					<Head>
						<title>Nestar</title>
						<meta name={"title"} content={`Nestar`} />
					</Head>
					<Stack id="pc-wrap">
						<Stack id={"top"}>
							<Top />
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


export default withLayoutFull;
