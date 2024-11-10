import { MoveRight } from "lucide-react";
import { Wrapper } from "../../components/wrapper";

export const MainSection = () => {
	return (
		<>
			<section className="relative parallax-background bg-cover bg-center h-screen text-white flex flex-col font-cabin">
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<Wrapper>
					<h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium max-w-xl">
						Beautiful homes made for you
					</h1>
					<p className="relative mt-6 max-w-sm text-md text-gray-400">
						In oculis quidem se esse admonere interesse enim maxime placeat,
						facere possimus, omnis. Et quidem faciunt, ut labore et accurate
						disserendum et harum quidem exercitus quid.
					</p>
				</Wrapper>

				<div className="w-full">
					<div className="relative max-w-[80%] w-full m-auto p-6 bg-white">
						<a
							href="#"
							className="inline-flex items-center space-x-1 font-default font-bold text-amber-500 p-2 px-6 hover:text-amber-600"
						>
							<span className="text-black text-xs sm:text-sm hover:text-amber-600">
								See all listings
							</span>
							<MoveRight />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};
