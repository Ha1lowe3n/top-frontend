import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';

import { Button, Htag, Paragraph, Rating, Tag } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

const Home: NextPage<HomeProps> = ({ menu }) => {
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

			<ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</div>
	);
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		},
	);
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
