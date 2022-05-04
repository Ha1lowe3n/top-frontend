import clsx from 'clsx';

import styles from './Sidebar.module.scss';

import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';
import Logo from '../logo.svg';

export const Sidebar: React.FC<SidebarProps> = ({ className, ...props }) => {
	return (
		<div className={clsx(styles.sidebar, className)} {...props}>
			<Logo className={styles.logo} />
			<div className={styles.search}>поиск</div>
			<Menu />
		</div>
	);
};
