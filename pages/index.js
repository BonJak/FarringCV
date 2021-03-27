import Head from 'next/head'

import HomeLayout from "../Containers/Layout/HomeLayout";

export default function Home() {
	return (
		<div style={{height:'100vh',width:'100vw'}}>
			<Head>
				<title>Farrin Marouf Sofian Portfolio App </title>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta name="format-detection" content="telephone=no"/>
				<meta name="apple-mobile-web-app-capable" content="yes"/>
				<meta name="author" content="Farrin"/>
				<meta name="keywords"
				      content="Farrin Marouf Sofian Portfolio"/>
				<meta name="description"
				      content="Farrin Marouf Sofian Portfolio App. Computer Science and Web Development enthusiast"/>
			</Head>
			<HomeLayout/>
		</div>
	)
}
