import React from 'react';
import {Button} from "antd";

const DownloadPDF = (props) => {

	return (
		<a href="/static/farrin-resume.pdf">
			<Button shape="round" type="danger">
				Download CV
			</Button>
		</a>

	)
}

export default DownloadPDF
