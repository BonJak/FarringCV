import React from 'react'

import Image from 'next/image'
import {Avatar as AntAvatar} from 'antd'

const Avatar = (props) => {
	return (
		<div>
			<AntAvatar size={200} icon={
				<Image
					width={200}
					height={200}
					objectFit="cover"
					src="/static/Farrin.JPG"/>
			}/>


		</div>
	)
}

export default Avatar
