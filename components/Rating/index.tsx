import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import Image from "next/image";

import styles from "./Rating.module.scss";
import starIcon from "../../assets/star.svg";
import primaryStarIcon from "../../assets/primary-star.svg";
import clsx from "clsx";

interface RatingProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
}

export const Rating: React.FC<RatingProps> = ({
    isEditable = false,
    ...props
}) => {
    const [rating, setRating] = useState<number>(0);

    return (
        <div {...props}>
            {Array(5)
                .fill(<></>)
                .map((_, i) => (
                    <Image
                        key={i}
                        src={i < rating ? primaryStarIcon : starIcon}
                        width="20"
                        height="20"
                        alt="star"
                        className={clsx({
                            [styles.star]: isEditable,
                        })}
                        onClick={() =>
                            isEditable &&
                            (rating === i + 1 ? setRating(0) : setRating(i + 1))
                        }
                        tabIndex={isEditable ? 0 : -1}
                    />
                ))}
        </div>
    );
};
