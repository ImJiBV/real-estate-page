import PropTypes from "prop-types";
import {
	createContext,
	useEffect,
	useReducer,
	useCallback,
	useMemo,
} from "react";
// utils
import axios from "../utils/axios";
import localStorageAvailable from "../utils/localStorageAvailable";
//
import { GETSESSION, isValidToken, setSession, setUserSession } from "./utils";
import { HOST_API_KEY } from "@/config-global";

const initialState = {
	isInitialized: false,
	isAuthenticated: false,
	user: null,
};

const reducer = (state, action) => {
	if (action.type === "INITIAL") {
		return {
			isInitialized: true,
			isAuthenticated: action.payload.isAuthenticated,
			user: action.payload.user,
		};
	}
	if (action.type === "LOGIN") {
		return {
			...state,
			isAuthenticated: true,
			user: action.payload.user,
		};
	}
	if (action.type === "LOGOUT") {
		return {
			...state,
			isAuthenticated: false,
			user: null,
		};
	}

	return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext(null);

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const storageAvailable = localStorageAvailable();

	const initialize = useCallback(async () => {
		try {
			const accessToken = storageAvailable
				? localStorage.getItem("accessToken")
				: "";

			if (accessToken && isValidToken(accessToken)) {
				setSession(accessToken);

				const response = await axios.get(`/api/user/profile`, {
					headers: {
						authorization: GETSESSION(),
						"x-api-key": HOST_API_KEY,
					},
				});

				const user = response.data;

				dispatch({
					type: "INITIAL",
					payload: {
						isAuthenticated: true,
						user,
					},
				});
			} else {
				dispatch({
					type: "INITIAL",
					payload: {
						isAuthenticated: false,
						user: null,
					},
				});
			}
		} catch (error) {
			dispatch({
				type: "INITIAL",
				payload: {
					isAuthenticated: false,
					user: null,
				},
			});
		}
	}, [storageAvailable]);

	useEffect(() => {
		initialize();
	}, [initialize]);

	// LOGIN
	const login = useCallback(async (email, password) => {
		const response = await axios.post(
			"/api/auth/login",
			{
				email,
				password,
			},
			{ headers: { "x-api-key": HOST_API_KEY } }
		);

		const { access_token, user } = response.data;

		setSession(access_token);

		initialize();

		dispatch({
			type: "LOGIN",
			payload: {
				user,
			},
		});
	}, []);

	// LOGOUT
	const logout = useCallback(() => {
		setSession(null);
		setUserSession(null);

		dispatch({
			type: "LOGOUT",
		});
	}, []);

	const memoizedValue = useMemo(
		() => ({
			isInitialized: state.isInitialized,
			isAuthenticated: state.isAuthenticated,
			user: state.user,
			method: "jwt",
			login,
			logout,
		}),
		[state.isAuthenticated, state.isInitialized, state.user, login, logout]
	);

	return (
		<AuthContext.Provider value={memoizedValue}>
			{children}
		</AuthContext.Provider>
	);
}
