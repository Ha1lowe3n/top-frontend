import clsx from 'clsx';

import styles from './Paragraph.module.scss';

import { ParagraphProps } from './Paragraph.props';

export const Paragraph: React.FC<ParagraphProps> = ({
	size = 'medium',
	className,
	children,
	...props
}) => {
	return (
		<p
			className={clsx(styles.p, className, {
				[styles.big]: size === 'big',
				[styles.medium]: size === 'medium',
				[styles.small]: size === 'small',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
