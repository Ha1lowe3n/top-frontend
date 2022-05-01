import clsx from 'clsx';

import styles from './Button.module.scss';

import { ButtonProps } from './Button.props';
import { ArrowIcon } from '../../assets/svgs';

export const Button: React.FC<ButtonProps> = ({
	appearance,
	arrow = 'none',
	children,
	className,
	...props
}) => {
	return (
		<button
			className={clsx(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={clsx(styles.arrow, {
						[styles.down]: arrow === 'down',
					})}
				>
					{<ArrowIcon />}
				</span>
			)}
		</button>
	);
};
