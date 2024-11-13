import { useState } from "react";
import { Link as Link } from "react-router-dom";

export default function NavMiniItem({
	item,
	active,
	onClick,
	open,
	depth,
	isNavOpen,
}) {
	const { title, path, icon, info, children, disabled, caption, roles } = item;

	const subItem = depth !== 1;

	return (
		<>
			<Link
				to={path}
				className={`flex ${
					active ? `bg-blue-100 text-blue-600` : `text-gray-900`
				} 
                ${subItem && active && `bg-white text-blue-600`}
                ${subItem && "hover:bg-blue-50 justify-start p-2.5"}
                justify-start p-2.5 items-center rounded-lg font-medium text-sm hover:bg-blue-100 hover:text-blue-600 capitalize space-x-2`}
			>
				{icon}
			</Link>
		</>
	);
}
