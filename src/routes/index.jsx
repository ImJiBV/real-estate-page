import { Navigate, useRoutes } from "react-router-dom";

import MainLayout from "../layouts/main/main-layout";
import { HomePage } from "./elements";

// AuthGuard
// import AuthGuard from "../auth/AuthGuard";

export default function Router() {
	return useRoutes([
		/* {
			path: "auth",
			children: [
				{
					path: "login",
					element: (
						<GuestGuard>
							<LoginPage />
						</GuestGuard>
					),
				},
			],
		}, */
		/* {
			path: "management",
			element: (
				<>
					<AuthGuard>
						<MainLayout />
					</AuthGuard>
				</>
			),
		}, */
		// ... Main Routes
		{
			path: "/",
			element: <MainLayout />,
			/** .. child components
			 *  children: [ { element: ...  } ]
			 *
			 *
			 */
			children: [{ element: <HomePage />, index: true }],
		},
	]);
}
