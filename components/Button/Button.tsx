import clsx from "clsx";

import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";

export const Button: React.FC<ButtonProps> = ({ appearance, children, className, ...props }) => {
    return (
        <button
            className={clsx(styles.button, className, {
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost",
            })}
            {...props}
        >
            {children}
        </button>
    );
};
