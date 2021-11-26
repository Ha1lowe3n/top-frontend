import React, { DetailedHTMLProps, HTMLAttributes } from "react";

// import styles from "./index.module.scss";

interface HeaderProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header: React.FC<HeaderProps> = () => {
    return <div>Header</div>;
};
