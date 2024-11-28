import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LayoutOthers from "../../../libs/Layouts/LayoutOthers";

export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

const MyPage: NextPage = () => {
		return (
      <div>
        
      </div>
		);
	}


export default LayoutOthers(MyPage);




