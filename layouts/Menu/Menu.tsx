import { useContext } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './Menu.module.scss';
import { BookIcon, BoxIcon, CloudIcon, HatIcon } from './icons';

import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem, TopLevelCategory } from '../../interfaces';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <HatIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <BoxIcon />, id: TopLevelCategory.Products },
];

export const Menu: React.FC = () => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((m) => (
					<div key={m.route}>
						<Link href={`/${m.route}`}>
							<a>
								<div
									className={clsx(styles.firstLevel, {
										[styles.firstLevelActive]: m.id === firstCategory,
									})}
								>
									{m.icon}
									<span>{m.name}</span>
								</div>
							</a>
						</Link>

						{m.id == firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map((m) => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div
							className={clsx(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened,
							})}
						>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map((p) => (
			<Link href={`/${route}/${p.alias}`}>
				<a
					className={clsx(styles.thirdLevel, {
						[styles.thirdLevelActive]: false,
					})}
				>
					{p.category}
				</a>
			</Link>
		));
	};

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
