import clsx from 'clsx';
import { format } from 'date-fns';

import styles from './Footer.module.scss';

import { FooterProps } from './Footer.props';

export const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
	const currentYear = format(new Date(), 'yyyy');

	return (
		<div {...props} className={clsx(styles.footerWrapper, className)}>
			<div>{`OwlTop © 2020 - ${currentYear} Все права защищены`}</div>
			<a href="#" target="_blank">
				Пользовательское соглашение
			</a>
			<a href="#" target="_blank">
				Политика конфиденциальности
			</a>
		</div>
	);
};
