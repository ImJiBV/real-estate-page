import { Bath, Car, Hash, MoveRight } from "lucide-react";
import { Wrapper } from "../../components/wrapper";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { DATA } from "@/mock/info-mock";

export const InfoSection = () => {
	return (
		<>
			<section className="w-full bg-gray-100">
				<div className="md:max-w-[80%] w-full m-auto p-10 sm:py-44 lg:py-64">
					<div className="space-y-4">
						<div className="h-1 w-14 sm:w-32 bg-gradient-to-r from-amber-500 to-black"></div>
						<h2 className="text-2xl sm:text-4xl font-semibold text-black">
							Find Your Next Place To Live
						</h2>
					</div>

					<div className="p-4 mt-10">
						<div className="hidden md:block">
							<div className="flex flex-row flex-wrap gap-8">
								{DATA.map((house, i) => {
									return (
										<div
											key={i}
											className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden font-default"
										>
											<img
												src={house.houseImage}
												alt="Malto House"
												className="w-full h-48 object-cover"
											/>

											<div className="p-4">
												<h2 className="text-base font-semibold">
													{house.houseName}
												</h2>
											</div>

											<div className="grid grid-cols-3 divide-x text-center text-xs font-semibold py-2">
												<div className="flex justify-center items-center space-x-2">
													<Car className="w-4" />
													<span className="">{house.totalCarCapacity}</span>
												</div>
												<div className="flex justify-center items-center space-x-2">
													<Bath className="w-4" />
													<span className="">{house.totalBaths}</span>
												</div>
												<div className="flex justify-center items-center space-x-2">
													<Hash className="w-4" />
													<span className="">{house.totalPax}</span>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<div className="block md:hidden">
							<Carousel>
								<CarouselContent>
									{DATA.map((house, i) => {
										return (
											<CarouselItem
												key={i}
												className="sm:basis-1/2 lg:basis-1/3"
											>
												<div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden font-default">
													<img
														src={house.houseImage}
														alt="Malto House"
														className="w-full h-48 object-cover"
													/>

													<div className="p-4">
														<h2 className="text-base font-semibold">
															{house.houseName}
														</h2>
													</div>

													<div className="grid grid-cols-3 divide-x text-center text-xs font-semibold py-2">
														<div className="flex justify-center items-center space-x-2">
															<Car className="w-4" />
															<span className="">{house.totalCarCapacity}</span>
														</div>
														<div className="flex justify-center items-center space-x-2">
															<Bath className="w-4" />
															<span className="">{house.totalBaths}</span>
														</div>
														<div className="flex justify-center items-center space-x-2">
															<Hash className="w-4" />
															<span className="">{house.totalPax}</span>
														</div>
													</div>
												</div>
											</CarouselItem>
										);
									})}
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
