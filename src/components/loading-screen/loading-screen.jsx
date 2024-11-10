import { Building2 } from "lucide-react";

export default function LoadingScreen() {
	return (
		<div className="absolute top-0 left-0 z-10 flex justify-center items-center h-screen bg-white w-full">
			<div className="animate-spin p-10 rounded-2xl border-4"></div>
			<div className="animate-spin p-10 rounded-2xl border-4 absolute"></div>
			<Building2 color="gray" className="absolute animate-pulse" />
		</div>
	);
}
