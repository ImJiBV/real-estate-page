import LoadingScreen from "@/components/loading-screen/loading-screen";
import { Suspense, lazy } from "react";

const Loadable = (Component) => (props) =>
	(
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);

export const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
export const HouseList = Loadable(
	lazy(() => import("../pages/dashboard/HouseListing"))
);

export const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));
