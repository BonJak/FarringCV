import React from 'react'
import {Col, Row, Space, Tabs} from "antd";

const {TabPane} = Tabs
const Skills = (props) => {

	return (
		<div className="card-container">
		    <Tabs type="card">
		      <TabPane tab="Skills" key="1">
		        <p>Content of Tab Pane 1</p>
		        <p>Content of Tab Pane 1</p>
		        <p>Content of Tab Pane 1</p>
		      </TabPane>
		      <TabPane tab="Languages" key="2">
		        <p>Content of Tab Pane 2</p>
		        <p>Content of Tab Pane 2</p>
		        <p>Content of Tab Pane 2</p>
		      </TabPane>
		      <TabPane tab="Courses" key="3">
		        <p>Content of Tab Pane 3</p>
		        <p>Content of Tab Pane 3</p>
		        <p>Content of Tab Pane 3</p>
		      </TabPane>
		    </Tabs>
		  </div>
	)
}

export default Skills
