import { Link as Link } from "react-router-dom";
/* import {
	dotIcon,
	downArrow,
	rightArrow,
} from "../../../../icons/nav-icons/nav-icons";

import { LoadSvg } from "../../../LoadSvg";
import RoleBasedGuard from "../../../../auth/RoleGuard"; */

export default function NavItem({
	item,
	hasChild,
	active,
	onClick,
	open,
	depth,
	isNavOpen,
}) {
	const { title, path, icon, info, children, disabled, caption, roles } = item;

	const subItem = depth !== 1;

	const renderItem = () => {
		return (
			<>
				<Link
					to={path}
					className={`flex ${
						active ? `bg-blue-100 text-blue-600` : `text-gray-900`
					} 
                    ${subItem && active && `bg-white text-blue-600`}
                    ${subItem && "hover:bg-blue-50 justify-start px-4 py-2.5"}
                    justify-start px-4 py-2.5 items-center p-4 rounded-lg font-medium text-sm hover:bg-blue-100 hover:text-blue-600 capitalize space-x-2`}
				>
					{icon}
					<span>{title}</span>
				</Link>
			</>
		);
	};

	return <div> {renderItem()} </div>;
}
