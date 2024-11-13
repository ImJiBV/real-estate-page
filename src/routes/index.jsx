import { Navigate, useRoutes } from "react-router-dom";

import MainLayout from "@/layouts/main/main-layout";
import DashboardLayout from "@/layouts/dashboard";

import { LoginPage, HomePage, HouseList } from "./elements";

// Guard
import GuestGuard from "@/auth/guest-guard";
import AuthGuard from "@/auth/auth-guard";

// AuthGuard

export default function Router() {
	return useRoutes([
		{
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
		},
		{
			path: "management",
			element: (
				<>
					<AuthGuard>
						<DashboardLayout />
					</AuthGuard>
				</>
			),
			children: [
				/* {
					element: <Navigate to={PATH_AFTER_LOGIN} replace />,
					index: true,
				}, */

				{
					path: "house-list",
					element: <HouseList />,
				},
			],
		},
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
