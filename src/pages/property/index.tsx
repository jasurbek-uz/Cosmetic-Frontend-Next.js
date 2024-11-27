import { NextPage } from "next";
import LayoutOthers from "../../../libs/Layouts/LayoutOthers";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import MenuItem from "@mui/material/MenuItem";
import { Menu } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button } from "@mui/material";

export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

const PropertyList: NextPage = ({ initialInput, ...props }: any) => {
  const router = useRouter();
  return (
    <div>
      
    </div>
  );
}
  

export default LayoutOthers (PropertyList);