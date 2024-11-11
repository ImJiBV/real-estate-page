import { MoveRight } from "lucide-react";
import { useState, useEffect } from "react";

export const AboutSection = () => {
	const [isImageInView, setIsImageInView] = useState(false);
	const [isTextInView, setIsTextInView] = useState(false);

	useEffect(() => {
		// Observer for image and text sections
		const observerOptions = { threshold: 0.25 };
		const imageObserver = new IntersectionObserver(
			([entry]) => entry.isIntersecting && setIsImageInView(true),
			observerOptions
		);
		const textObserver = new IntersectionObserver(
			([entry]) => entry.isIntersecting && setIsTextInView(true),
			observerOptions
		);

		const imageTarget = document.getElementById("about-image");
		const textTarget = document.getElementById("about-text");

		if (imageTarget) imageObserver.observe(imageTarget);
		if (textTarget) textObserver.observe(textTarget);

		return () => {
			if (imageTarget) imageObserver.unobserve(imageTarget);
			if (textTarget) textObserver.unobserve(textTarget);
		};
	}, []);

	return (
		<section className="relative w-full bg-white pt-10 sm:pt-32 flex flex-col">
			{/* Image Section */}
			<figure
				id="about-image"
				className={`sm:absolute w-full sm:max-w-[50%] rounded-tr-[48px] bg-white shadow-2xl transition-all duration-1000 ease-in-out transform ${
					isImageInView
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-x-5 sm:translate-y-24"
				}`}
			>
				<img
					src="/assets/images/about-image.jpg"
					alt="A scenic view showcasing our team working together"
					className="w-full h-auto object-cover rounded-tr-[48px]"
				/>
			</figure>

			{/* Text Section */}
			<div className="md:max-w-[80%] w-full m-auto">
				<div className="flex justify-end md:mt-24">
					<article className="w-full sm:max-w-[50%] p-12 sm:px-10 sm:py-36">
						<div
							id="about-text"
							className={`space-y-4 transition-all duration-1000 ease-in-out transform ${
								isTextInView
									? "opacity-100 translate-x-0"
									: "opacity-0 translate-x-10 sm:translate-x-20"
							}`}
						>
							<div className="h-1 w-14 sm:w-32 bg-gradient-to-r from-amber-500 to-black"></div>
							<h2 className="text-2xl sm:text-4xl font-semibold text-black">
								You’re in good hands
							</h2>
							<p className="text-gray-600">
								Torquatos nostros? quos dolores eos, qui dolorem ipsum per se
								texit, ne ferae quidem se repellere, idque instituit docere sic:
								omne animal, simul atque integre iudicante itaque aiunt hanc
								quasi involuta aperiri, altera occulta quaedam et voluptatem
								accusantium doloremque.
							</p>
							<a
								href="#"
								className="inline-flex items-center space-x-1 bg-black text-white px-6 py-2 rounded-tr-lg hover:text-amber-700"
								aria-label="Learn more about our services"
							>
								<span>Learn more</span>
								<MoveRight className="text-amber-600 hover:text-amber-700" />
							</a>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};
