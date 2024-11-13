import { Outlet } from "react-router-dom";
import { useState } from "react";
import { HNavigation } from "./nav/h-navigation";
import { VNavigation } from "./nav/v-navigation";
import { Wrapper } from "@/components/wrapper";
import { Toaster } from "@/components/ui/toaster";

// ----------------------------------------------------------------------

export default function DashboardLayout() {
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
			<div className="relative h-screen flex">
				<HNavigation open={open} openNav={openNav} closeNav={closeNav} />
				<VNavigation open={open} openNav={openNav} closeNav={closeNav} />
				<Wrapper open={open}>
					<Outlet />
					<Toaster />
				</Wrapper>
			</div>
		</>
	);
}
