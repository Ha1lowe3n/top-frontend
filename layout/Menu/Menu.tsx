import { useContext } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import styles from './Menu.module.scss';

import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces';
import { firstLevelMenu } from '../../helpers';

export const Menu: React.FC = () => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const currentAlias = router.asPath.split('/')[2];

	const changeSecondCategory = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map((m) => {
					if (m._id.secondCategory === secondCategory) {
						m.isOpened = !m.isOpened;
					}
					return m;
				}),
			);
	};

	const buildFirstLevel = () => {
		return firstLevelMenu.map((m) => (
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
		));
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map((m) => {
					if (m.pages.map((p) => p.alias).includes(currentAlias)) {
						m.isOpened = true;
					}
					return (
						<div key={m._id.secondCategory}>
							<div
								className={styles.secondLevel}
								onClick={() => changeSecondCategory(m._id.secondCategory)}
							>
								{m._id.secondCategory}
							</div>
							<div
								className={clsx(styles.secondLevelBlock, {
									[styles.secondLevelBlockOpened]: m.isOpened,
								})}
							>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map((p) => (
			<Link key={p.alias} href={`/${route}/${p.alias}`}>
				<a
					className={clsx(styles.thirdLevel, {
						[styles.thirdLevelActive]: p.alias === currentAlias,
					})}
				>
					{p.category}
				</a>
			</Link>
		));
	};

	return <>{buildFirstLevel()}</>;
};
