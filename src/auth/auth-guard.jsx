import PropTypes from "prop-types";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
// components
import LoadingScreen from "@/components/loading-screen/loading-screen";

//
import { useAuthContext } from "./useAuthContext";

import LoginPage from "../pages/auth/Login";

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
	children: PropTypes.node,
};

export default function AuthGuard({ children }) {
	const { isAuthenticated, isInitialized } = useAuthContext();

	const { pathname } = useLocation();

	const [requestedLocation, setRequestedLocation] = useState(null);

	if (!isInitialized) {
		return <LoadingScreen />;
	}

	if (!isAuthenticated) {
		if (pathname !== requestedLocation) {
			setRequestedLocation(pathname);
		}
		return <LoginPage />;
	}

	if (requestedLocation && pathname !== requestedLocation) {
		setRequestedLocation(null);
		return <Navigate to={requestedLocation} />;
	}

	return <> {children} </>;
}
