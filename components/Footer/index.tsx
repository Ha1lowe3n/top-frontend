import React, { DetailedHTMLProps, HTMLAttributes } from "react";

// import styles from "./index.module.scss";

interface FooterProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer: React.FC<FooterProps> = () => {
    return <div>Footer</div>;
};
