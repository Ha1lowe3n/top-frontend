import {
	GetStaticPaths,
	GetStaticPathsContext,
	GetStaticProps,
	GetStaticPropsContext,
	NextPage,
} from 'next';
import React, { useState } from 'react';
import axios from 'axios';
import { ParsedUrlQuery } from 'node:querystring';

import { withLayout } from '../../layout/Layout';
import { MenuItem, TopPageModel, ProductModel } from '../../interfaces';

const firstCategory = 0;

const Course: NextPage<CourseProps> = ({ menu, page, products }) => {
	return <>{products && products.length}</>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		},
	);
	return {
		paths: menu.flatMap((m) => m.pages.map((p) => '/courses/' + p.alias)),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true,
		};
	}
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		},
	);
	const { data: page } = await axios.get<TopPageModel>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias,
	);
	const { data: products } = await axios.post<ProductModel[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
		{
			category: page.category,
			limit: 10,
		},
	);

	return {
		props: {
			menu,
			firstCategory,
			page,
			products,
		},
	};
};

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
	page: TopPageModel;
	products: ProductModel[];
}
