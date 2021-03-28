import React from 'react'
import {Card, Col} from "antd";


const SkillCard = ({cardData}) => {

	return cardData.map((title, i) => {
		return (
			<Col sm={24} md={12} lg={6} key={i}>
				<Card title={`${title.titleIdx}   ${title.titleText}`}>
					Test
				</Card>
			</Col>
		)
	})

}

export default SkillCard;





















