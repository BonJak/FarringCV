import React from 'react'
import {Col, Row, Space} from "antd";
import AboutMe from "../Components/PagesX/AboutMe";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBriefcase, faBullseye, faCheckCircle, faHeartbeat} from '@fortawesome/free-solid-svg-icons'

const About = () => {
	return (
		<Row>
			<Row>
				<Col span={24}>
					<h2 className="title">About me</h2>
					<Space/>
				</Col>
			</Row>
			<Row justify="center">
				<Col span={16}>
					<AboutMe/>
				</Col>
			</Row>
			<Row justify="center">
				<Col span={16}>
					<Row justify="center">
						<Col span={24}>
							<Row justify="center">
								<Col span={12}>
									<FontAwesomeIcon className="about-icons" icon={faCheckCircle}/>
									<h3>Curious to Learn</h3>
									<p className="des">I've always been committed to lifelong learning and sharing my knowledge
										with
										others</p>
								</Col>
								<Col span={12}>
									<FontAwesomeIcon className="about-icons" icon={faBullseye}/>
									<h3>Ambitious</h3>
									<p className="des">Have a goal in my mind? <br/>I will work as hard as I can to achieve it
										<br/> Have a long-term goal in mind? I will plan ahead and never give up.
									</p>
								</Col>
								<Col span={12}>
									<FontAwesomeIcon className="about-icons" icon={faHeartbeat}/>
									<h3>TeamWork</h3>
									<p className="des">I've been engaged in many group activities and projects which I've enjoyed
										so
										much,
										I've always also tried my best to do the best I can while working with others.
									</p>
								</Col>
								<Col span={12}>
									<FontAwesomeIcon className="about-icons" icon={faBriefcase}/>
									<h3>Reliable and Consistent</h3>
									<p className="des">Given a responsibility or a task, I will plan ahead and dedicate enough
										time
										to
										make sure
										everything goes according to the plan. I've always enjoyed taking responsibilities and
										pushing myself
										to shine with them.
									</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</Row>
	)
}
export default About
