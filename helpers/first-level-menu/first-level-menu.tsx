import { FirstLevelMenuItem, TopLevelCategory } from '../../interfaces';
import { BookIcon, BoxIcon, CloudIcon, HatIcon } from './icons';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <HatIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <BoxIcon />, id: TopLevelCategory.Products },
];
