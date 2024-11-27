import Image from "next/image";
import localFont from "next/font/local";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import LayoutHome from "../../libs/Layouts/LayoutHome";
import { NextPage } from "next";
import TrendCosmetics from "../../libs/components/homepage/trendCosmetics";
import { serverSideTranslations } from "next-i18next/dist/types/serverSideTranslations";
import BrandCosmetics from "../../libs/components/homepage/brandCosmetics";
import Advertisement from "../../libs/components/homepage/Advertisement";
import TopCosmetics from "../../libs/components/homepage/TopCosmetics";
import Cosmetologists from "../../libs/components/homepage/Cosmetologists";
import Events from "../../libs/components/homepage/Events";

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
