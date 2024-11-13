import PropTypes from "prop-types";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import useActiveLink from "@/hooks/useActiveLink";

import NavMiniItem from "./min-navitem";

export default function NavList({ data, depth, isNavOpen }) {
	const { pathname } = useLocation();

	const { active, isExternalLink } = useActiveLink(data.path);

	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!active) {
			handleClose();
		}
	}, [pathname]);

	const handleToggle = () => {
		setOpen(!open);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<div onClick={handleToggle} className="mt-2">
				<NavMiniItem
					item={data}
					active={active}
					open={open}
					onClick={handleToggle}
					depth={depth}
					isNavOpen={isNavOpen}
				/>
			</div>
		</>
	);
}
