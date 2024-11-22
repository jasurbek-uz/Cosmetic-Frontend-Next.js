import Image from "next/image";
import localFont from "next/font/local";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import LayoutHome from "../../libs/Layouts/LayoutHome";
import { NextPage } from "next";
import TrendCosmetics from "../../libs/components/homepage/trendCosmetics";

export const getStaticProps = async ({ locale }: any) => ({
	props: {...(await serverSideTranslations(locale, ["common"])),},
});

const Home: NextPage = () => {
    return (
			<Stack className={"home-page"}>
				<TrendCosmetics />
				<BrandCosmetics />
				<Advertisement />
				<TopCosmetics />
				<Cosmetologists />
				<Events />
			</Stack>
		);
  }

export default LayoutHome(Home);
