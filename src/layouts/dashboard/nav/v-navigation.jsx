import { NavSection } from "@/components/navigation/navigation";
import { Building2, Menu } from "lucide-react";
import Config from "../config/config";
import { NavSectionMini } from "@/components/navigation/mini/min-nav";

export const VNavigation = ({ open, openNav, closeNav }) => {
	return (
		<>
			{open && (
				<div
					className={`fixed inset-0 bg-black opacity-50 z-[2] xl:hidden`}
					onClick={closeNav}
				></div>
			)}

			<aside
				className={`hidden bg-white fixed min-w-16 lg:max-w-16 h-full z-[3] transition-transform duration-300 transform border-r border-gray-200 border-dotted ${
					open ? `hidden` : `lg:flex items-start justify-center`
				}`}
			>
				<NavSectionMini open={open} config={Config} />
			</aside>

			<aside
				className={`fixed min-w-80 lg:max-w-80 bg-white h-full z-[3] transition-transform duration-300 transform xl:transition-none border-r border-gray-200 border-dotted ${
					open ? "translate-x-0 lg:fixed" : "absolute -translate-x-full"
				}`}
			>
				<div className="p-6 flex flex-col gap-8">
					<div className="flex justify-between">
						<a href="#" className="flex items-center space-x-1">
							<Building2 className="text-amber-600" />
							<span>RealEstate</span>
						</a>
						<Menu
							onClick={openNav}
							id="button_aside"
							className="block xl:hidden"
						/>
					</div>
					<NavSection open={open} config={Config} />
				</div>
			</aside>
		</>
	);
};
