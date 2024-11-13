import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
	Menu,
	Cloud,
	CreditCard,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	Settings,
	User,
	UserPlus,
	Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthContext } from "@/auth/useAuthContext";
import { PATH_AUTH } from "@/routes/paths";

export const HNavigation = ({ open, openNav, closeNav }) => {
	const [color, setColor] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 40) {
				setColor(true);
			} else {
				setColor(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navigate = useNavigate();

	const { user, logout } = useAuthContext();

	const handleLogout = async () => {
		console.log("test");
		try {
			logout();
			navigate(PATH_AUTH.login, { replace: true });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<header
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div
					className={`fixed ${
						open ? "xl:pl-80 xl:pr-16" : "xl:px-16"
					} font-default w-full transition-all duration-300 z-[1] ${
						color ? "backdrop-blur-lg bg-white/30" : "bg-transparent"
					}`}
				>
					<div className="flex items-center p-2 w-full font-default m-auto px-4">
						<Menu
							onClick={openNav}
							id="button_aside"
							className={`${open ? "hidden xl:block" : ""}`}
						/>

						<nav className="ml-auto">
							<DropdownMenu>
								<DropdownMenuTrigger
									asChild
									className="cursor-pointer p-2 rounded-sm text-black"
								>
									<div className="flex items-center space-x-2">
										<div className="relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">
											<Avatar>
												<AvatarImage
													src="https://github.com/shadcn.png"
													alt="@shadcn"
												/>
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>
										</div>
										<div className="hidden sm:block">
											<h3 className="text-xs font-medium">
												{user?.lastName?.concat(", ", user?.firstName)}
											</h3>
											<p className="text-xs font-thin">Software Engineer</p>
										</div>
									</div>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56">
									<DropdownMenuLabel>
										<div className="flex items-center space-x-2">
											<div>
												<h3 className="text-xs font-medium">Lara Madrigal</h3>
												<p className="text-xs font-thin">Software Engineer</p>
											</div>
										</div>
									</DropdownMenuLabel>

									<DropdownMenuSeparator />
									<DropdownMenuItem onClick={handleLogout}>
										<LogOut />
										<span>Log out</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};
