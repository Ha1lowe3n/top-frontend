import type { NextPage } from 'next';
import React from 'react';

import { Button, Htag, Paragraph } from '../components';

const Home: NextPage = () => {
	return (
		<div>
			<Htag tag="h1">Hello</Htag>

			<Button appearance="primary" arrow="right">
				ntrrcn
			</Button>
			<Button appearance="ghost" arrow="down">
				ntrrcn
			</Button>

			<Paragraph size="big">hello</Paragraph>
			<Paragraph>hello</Paragraph>
			<Paragraph size="small">hello</Paragraph>
		</div>
	);
};

export default Home;
