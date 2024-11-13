import { Outlet } from "react-router-dom";
import { useState } from "react";

import { Header } from "./header";
import { Footer } from "./footer";

// ----------------------------------------------------------------------

export default function MainLayout() {
	const [open, setOpen] = useState(false);

	const openNav = () => {
		setOpen(!open);
	};

	const closeNav = (event) => {
		event.preventDefault();
		setOpen(!open);
	};

	return (
		<>
			<Header open={open} openNav={openNav} closeNav={closeNav} />
			<div className="overflow-hidden">
				<Outlet />
			</div>
			<Footer />
		</>
	);
}
