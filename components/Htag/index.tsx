import React from "react";

import styles from "./Htag.module.scss";

interface HtagProps {
    tag: "h1" | "h2" | "h3";
    children: React.ReactNode;
}

export const Htag: React.FC<HtagProps> = ({ tag, children }) => {
    return (
        <div className={styles.tags}>
            {tag === "h1" && <h1>{children}</h1>}
            {tag === "h2" && <h2>{children}</h2>}
            {tag === "h3" && <h3>{children}</h3>}
        </div>
    );
};
