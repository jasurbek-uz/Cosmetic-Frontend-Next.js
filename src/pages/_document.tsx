import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<meta name="title" content="Taffi" />
				<meta name="robots" content=" index, follow" />
				<link ref="icon" type="image/png" href="/public/image/logo.png" />
				<meta name="keyword"content={"taffi, taffi.uz, cosmetics, taffi kosmetika, brand kosmetic"	}/>
				<meta name="description"content={
						"Yuz va teri parvarishi.|" +
						"Face and skin care.|" +
						"얼굴 와 피푸 케어.|" +
						"최고 품질의 피부 및 얼굴 화장품을 구입할 수 있습니다"
					}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
