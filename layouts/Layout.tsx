import React from 'react';

import styles from './Layout.module.scss';

import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />

			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>

			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
	return function withLayoutComponent(props: T) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
