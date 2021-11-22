import clsx from "clsx";
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import styles from "./Tag.module.scss";

interface TagProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size: "big" | "small";
    children: ReactNode;
    href?: string;
    color: "ghost" | "red" | "grey" | "green" | "primary";
}

export const Tag: React.FC<TagProps> = ({
    children,
    className,
    size,
    color,
    href,
    ...props
}) => {
    return (
        <div
            className={clsx(styles.tag, className, {
                [styles.big]: size === "big",
                [styles.small]: size === "small",
                [styles.red]: color === "red",
                [styles.grey]: color === "grey",
                [styles.green]: color === "green",
                [styles.ghost]: color === "ghost",
                [styles.primary]: color === "primary",
            })}
            {...props}
        >
            {href ? (
                <Link href={href}>
                    <a>{children}</a>
                </Link>
            ) : (
                children
            )}
        </div>
    );
};
