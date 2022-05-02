import { SidebarProps } from './Sidebar.props';

export const Sidebar: React.FC<SidebarProps> = ({ ...props }) => {
	return <div {...props}>Sidebar</div>;
};