import { Building2, MoveRight } from "lucide-react";
import {
	facebookIcon,
	xIcon,
	instagramIcon,
} from "../../assets/icon/media-icons";

export const Footer = () => {
	return (
		<>
			<footer className="w-full bg-black text-white font-default">
				<div className="w-full max-w-[80%] m-auto py-10">
					<div className="text-center space-y-4 p-4 flex flex-col sm:flex-row justify-between items-center">
						<h2 className="text-lg sm:text-4xl font-bold">
							Make your dreams a{" "}
							<span className="text-yellow-500">reality</span>
						</h2>
						<a
							href="#"
							className="inline-flex items-center space-x-1 bg-amber-400 text-black p-4 px-6 rounded-tr-2xl font-semibold"
						>
							<span>Work with us</span>
							<MoveRight color="white" />
						</a>
					</div>
					<hr className="w-full border-t border-gray-900 my-5"></hr>
					<div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 py-8">
						<div className="space-y-4 text-sm">
							<a
								href="#"
								className="flex items-center space-x-1 text-amber-400"
							>
								<Building2 />
								<span className="text-white">RealEstate</span>
							</a>
							<div className="flex flex-row text-xs justify-between items-center">
								<a href="#">
									<LoadSvg Icon={facebookIcon} />
								</a>
								<a href="#">
									<LoadSvg Icon={xIcon} />
								</a>
								<a href="#">
									<LoadSvg Icon={instagramIcon} />
								</a>
							</div>
						</div>
						{Array(3)
							.fill()
							.map((_, colIndex) => (
								<div key={colIndex}>
									<h3 className="font-bold mb-4">Column Heading</h3>
									{[
										"Link goes here",
										"Link goes here",
										"Link goes here",
										"Link goes here",
									].map((link, index) => (
										<a
											key={index}
											href="#"
											className="block text-gray-400 hover:text-gray-300 mb-2"
										>
											{link}
										</a>
									))}
								</div>
							))}
					</div>
				</div>
			</footer>
		</>
	);
};

const LoadSvg = ({ Icon }) => {
	return <Icon />;
};
