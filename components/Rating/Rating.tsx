import clsx from 'clsx';
import { useEffect, useState, KeyboardEvent } from 'react';
import { StarIcon } from '../../assets/svgs';
import styles from './Rating.module.scss';

import { RatingProps } from './Rating.props';

export const Rating: React.FC<RatingProps> = ({
	rating,
	isEditable = false,
	setRating,
	...props
}) => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedRatingArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<StarIcon
					className={clsx(styles.star, {
						[styles.filled]: i < currentRating,
					})}
					tabIndex={isEditable ? 0 : -1}
				/>
			);
		});
		setRatingArray(updatedRatingArray);
	};

	const changeDispay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i + 1);
	};

	const handleSpace = (i: number, e: KeyboardEvent<HTMLSpanElement>) => {
		if ((e.code !== 'Space' && e.code !== 'Enter') || !setRating) {
			return;
		}
		setRating(i + 1);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (
				<span
					key={i}
					className={isEditable ? styles.starWrapper : ''}
					onMouseEnter={() => changeDispay(i + 1)}
					onMouseLeave={() => changeDispay(rating)}
					onMouseDown={(e) => e.preventDefault()}
					onClick={() => onClick(i)}
					onKeyDown={(e) => handleSpace(i, e)}
				>
					{r}
				</span>
			))}
		</div>
	);
};
