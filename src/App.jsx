import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./auth/jwt-context";

import "./App.css";

// ..routes
import Router from "./routes";

function App() {
	return (
		<AuthProvider>
			<HelmetProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</HelmetProvider>
		</AuthProvider>
	);
}

export default App;
