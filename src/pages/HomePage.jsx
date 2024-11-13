import { MessageSection } from "@/sections/home/message-section";
import { AboutSection } from "../sections/home/about-section";
import { InfoSection } from "../sections/home/info-section";
import { MainSection } from "../sections/home/main-section";
import { RatingSection } from "@/sections/home/rating-section";
import { AboutSection2 } from "@/sections/home/about-section-2";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
	return (
		<>
			<Helmet>
				<title> Home | Real-Estate</title>
			</Helmet>
			<MainSection />
			<AboutSection />
			<InfoSection />
			<AboutSection2 />
			<MessageSection />
			<RatingSection />
		</>
	);
}
