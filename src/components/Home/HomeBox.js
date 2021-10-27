import React from 'react'
import {Link} from 'gatsby'

import Button from '../elements/buttons'
import {Heading1, Lead} from '../elements/text'
import {Box} from '../elements/layout'

const HomeBox = () => {
	return (
		<>
			<Heading1 align={'center'}>The <strike>modern</strike> janky way to half-build websites and apps that delivers <strike>better</strike> performance</Heading1>
			<Lead align={'center'}>The JANKstack architecture has many benefits, whether you’re building a large e-commerce site, SaaS application or personal blog.</Lead>
			<Lead align={'center'}>
				This website was built using the most cuttingest edge technology.
			</Lead>
			<hr />
			<Box.Center>
				<Link to="/characters/">
					<Button animate style={{fontSize: '3em'}}>Join the 💩 movement </Button>
				</Link>
				<Box.Pad padX={20} />
			</Box.Center>
		</>
	)
}

export default HomeBox