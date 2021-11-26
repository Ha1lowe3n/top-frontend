import React, { DetailedHTMLProps, HTMLAttributes } from "react";

// import styles from "./index.module.scss";

interface SidebarProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar: React.FC<SidebarProps> = () => {
    return <div>Sidebar</div>;
};
