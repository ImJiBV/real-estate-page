import { Building2, Menu, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = ({ open, openNav, closeNav }) => {
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

	return (
		<>
			{open && (
				<div
					className={`fixed inset-0 bg-black opacity-50 z-[2]`}
					onClick={closeNav}
				></div>
			)}

			<header
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div
					className={`font-default fixed w-full transition-all duration-300 z-[1] ${
						color ? "backdrop-blur-lg bg-black/30" : "bg-transparent"
					}`}
				>
					<div className="flex items-center p-6 w-full font-default text-white m-auto md:max-w-[80%]">
						<Menu
							onClick={openNav}
							id="button_aside"
							className="block sm:hidden"
						/>

						<a href="#" className="hidden sm:flex  items-center space-x-1">
							<Building2 color="white" />
							<span>RealEstate</span>
						</a>

						<nav className="ml-auto">
							<ul className="flex items-center space-x-10 text-sm">
								{["Nav Link", "Nav Link", "Nav Link"].map((link, index) => (
									<Link
										key={index}
										className="hover:text-gray-300 hidden sm:block"
									>
										{link}
									</Link>
								))}
								<a
									href="#"
									className="inline-flex items-center space-x-1 bg-amber-600 text-white p-2 px-6 rounded-tr-2xl hover:bg-amber-700"
								>
									<span>Work with us</span>
									<MoveRight color="white" />
								</a>
							</ul>
						</nav>
					</div>
				</div>
			</header>

			{/* Side Nav */}

			<aside
				className={`z-[3] fixed h-full w-[320px] overflow-y-auto bg-white transition-transform duration-300 transform ${
					open ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="w-full flex-col font-default font-light text-white">
					<div className="flex items-center text-amber-600 p-8 space-x-2">
						<Menu onClick={openNav} id="button_aside" />
						<span>RealEstate</span>
					</div>
					<div className="flex flex-col space-y-2 p-8 text-black">
						{["Nav Link", "Nav Link", "Nav Link"].map((link, index) => (
							<Link key={index} className="hover:text-gray-300">
								{link}
							</Link>
						))}
					</div>
				</div>
			</aside>
		</>
	);
};
