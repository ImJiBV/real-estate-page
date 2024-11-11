import { MoveRight } from "lucide-react";
import { useState, useEffect } from "react";

export const AboutSection2 = () => {
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

		const imageTarget = document.getElementById("about-image-2");
		const textTarget = document.getElementById("about-text-2");

		if (imageTarget) imageObserver.observe(imageTarget);
		if (textTarget) textObserver.observe(textTarget);

		return () => {
			if (imageTarget) imageObserver.unobserve(imageTarget);
			if (textTarget) textObserver.unobserve(textTarget);
		};
	}, []);

	return (
		<section className="relative w-full bg-white flex flex-col">
			{/* Image Section */}

			<figure
				id="about-image-2"
				className={`w-full sm:max-w-[50%] sm:absolute sm:-top-28 right-0 rounded-tl-[48px] bg-white shadow-2xl transition-all duration-1000 ease-in-out transform ${
					isImageInView
						? "opacity-100 translate-x-0"
						: "opacity-0 -translate-x-5 sm:-translate-x-10"
				}`}
			>
				<img
					src="/assets/images/about-image.jpg"
					alt="A scenic view showcasing our team working together"
					className="w-full h-auto object-cover rounded-tl-[48px]"
				/>
			</figure>

			{/* className={`w-full sm:max-w-[50%] sm:absolute sm:-top-28 right-0 rounded-tl-[48px] bg-white shadow-2xl transition-all duration-1000 ease-in-out transform ${
					isImageInView
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-24"
				}`} */}
			{/* Text Section */}
			<div className="md:max-w-[80%] w-full m-auto">
				<div className="flex justify-start">
					<article className="w-full sm:max-w-[50%] p-12 sm:px-12 sm:py-20 md:py-40 lg:py-60">
						<div
							id="about-text-2"
							className={`space-y-4 transition-all duration-1000 ease-in-out transform ${
								isTextInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-24"
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
