import React from 'react'
import Avatar from "../Elements/Avatar";
import { Typography } from 'antd';
import Typical from 'react-typical'
const { Title } = Typography;

const MainContent = (props) => {


	return (
		<div>
			<Avatar />
			<Title>Farrin Marouf Sofian</Title>
			<p>I'm a {' '}
			<Typical
				loop={Infinity}
				wrapper = "b"
				steps = {
					[
						'developer', 1000, 'computer engineer', 1000,
					]
				}
			/>

			</p>
		</div>
	)
}


export default MainContent;
