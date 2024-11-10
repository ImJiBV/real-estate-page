import LoadingScreen from "@/components/loading-screen/loading-screen";
import { Suspense, lazy } from "react";

const Loadable = (Component) => (props) =>
	(
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);

export const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
