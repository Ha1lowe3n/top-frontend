import clsx from 'clsx';

import styles from './Tag.module.scss';

import { TagProps } from './Tag.props';

export const Tag: React.FC<TagProps> = ({
	size = 'small',
	color = 'ghost',
	href,
	className,
	children,
	...props
}) => {
	return (
		<div
			className={clsx(styles.tag, className, {
				[styles.big]: size === 'big',
				[styles.small]: size === 'small',

				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.grey]: color === 'grey',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary',
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : children}
		</div>
	);
};
