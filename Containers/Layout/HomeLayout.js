import React from 'react'
import {Layout} from "antd";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MainContent from "../../Components/Content/MainContent";
import MyFooter from "../../Components/Footer/MyFooter";

const {Header, Footer, Sider, Content} = Layout
const HomeLayout = (props) => {

	return (
		<Layout>
			<Layout style={{height: '100vh'}}>
				<Sider>
					<Sidebar/>
				</Sider>
				<Content>
					<MainContent/>
				</Content>
			</Layout>
		</Layout>
	)
}

export default HomeLayout
