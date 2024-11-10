import { useCallback, useEffect, useRef, useState } from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { DATA } from "@/mock/rating-mock";

import useEmblaCarousel from "embla-carousel-react";

export const RatingSection = () => {
	/* const [emblaRef, emblaApi] = useEmblaCarousel();

	const getSelected = useCallback((emblaApi) => {
		console.log(emblaApi.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (emblaApi) emblaApi.on("selectedScrollSnap", getSelected);
	}, [emblaApi, getSelected]);

	console.log(emblaApi); */
	return (
		<>
			<section className="w-full m-auto flex justify-center items-center py-24 md:p-24">
				<div className="md:max-w-[80%] w-full">
					<Carousel
						opts={{
							loop: true,
						}}
					>
						<CarouselContent>
							{DATA.map((rating, i) => {
								return (
									<CarouselItem
										key={i}
										className="space-y-4 sm:basis-1/2 lg:basis-1/3"
									>
										<div className="max-w-xs mx-auto p-4 w-64">
											<div className="h-1 bg-gradient-to-r from-yellow-500 to-black mb-3"></div>

											<blockquote className="text-base font-semibold">
												{rating.message}
											</blockquote>
										</div>
										<div className="max-w-xs mx-auto bg-black text-white p-6 w-64">
											<div className="flex items-center space-x-2">
												<div>
													<img
														src={rating.profileImage}
														alt="profile image"
														className="w-12 h-12 rounded-full object-cover"
													/>
												</div>
												<div>
													<h3 className="text-xs font-medium">
														{rating.profileName}
													</h3>
													<p className="text-xs font-thin">{rating.role}</p>
												</div>
											</div>
										</div>
									</CarouselItem>
								);
							})}
						</CarouselContent>
					</Carousel>
				</div>
			</section>
		</>
	);
};
