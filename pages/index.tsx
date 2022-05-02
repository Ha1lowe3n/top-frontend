import type { NextPage } from 'next';
import React, { useState } from 'react';

import { Button, Htag, Paragraph, Rating, Tag } from '../components';

const Home: NextPage = () => {
	const [rating, setRating] = useState<number>(4);

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

			<Tag color="ghost">Ghost</Tag>
			<Tag color="grey">ggrey</Tag>
			<Tag color="red">Red</Tag>
			<Tag size="small" color="green">
				Green
			</Tag>
			<Tag color="primary">Green</Tag>

			<Rating rating={rating} isEditable setRating={setRating} />
		</div>
	);
};

export default Home;
