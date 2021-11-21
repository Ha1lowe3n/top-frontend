import clsx from "clsx";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import styles from "./Button.module.scss";

interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
    color: "primary" | "ghost";
    arrow?: "right" | "down";
}

export const Button: React.FC<ButtonProps> = ({
    children,
    color,
    className,
    arrow,
    ...props
}) => {
    return (
        <button
            className={clsx(styles.button, className, {
                [styles.button_primary]: color === "primary",
                [styles.button_ghost]: color === "ghost",
            })}
            {...props}
        >
            {children}
            {arrow && (
                <span
                    className={clsx(styles.arrow, {
                        [styles.arrow_down]: arrow === "down",
                    })}
                >
                    {">"}
                </span>
            )}
        </button>
    );
};
