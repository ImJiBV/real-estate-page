import { MoveRight } from "lucide-react";

export const MessageSection = () => {
	return (
		<>
			<section className="w-full bg-black p-10 ">
				<div className="flex flex-col items-center justify-center py-20 space-y-4">
					<div className="h-1 w-14 sm:w-32 bg-gradient-to-r from-amber-500 to-black"></div>
					<h2 className="text-2xl sm:text-4xl font-semibold text-white">
						You're in good hands
					</h2>
					<p className="relative mt-6 max-w-sm text-md text-gray-400 text-center">
						Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
						ne ferae quidem se repellere, idque instituit docere sic: omne
						animal, simul atque integre iudicante itaque aiunt hanc quasi
						involuta aperiri, altera occulta quaedam et voluptatem accusantium
						doloremque.
					</p>
					<a
						href="#"
						className="inline-flex items-center space-x-1 bg-amber-500 text-black p-4 px-6 rounded-tr-lg font-semibold"
					>
						<span>Learn more</span>
						<MoveRight color="white" />
					</a>
				</div>
			</section>
		</>
	);
};
