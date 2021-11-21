import clsx from "clsx";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./Paragraph.module.scss";

interface ParagraphProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {
    size: "big" | "medium" | "low";
    children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
    size = "medium",
    className,
    children,
    ...props
}) => {
    return (
        <p
            className={clsx(styles.paragraph, className, {
                [styles.big]: size === "big",
                [styles.medium]: size === "medium",
                [styles.low]: size === "low",
            })}
            {...props}
        >
            {children}
        </p>
    );
};
