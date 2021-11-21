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
}

export const Button: React.FC<ButtonProps> = ({
    children,
    color,
    className,
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
        </button>
    );
};
