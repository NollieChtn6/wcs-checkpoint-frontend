import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { PageLayout } from "./components/Layout";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/client";

import { useCountryStore } from "../store/countryStore";
import { useEffect } from "react";
import { CountryDetails } from "./pages/CountryDetails";

function App() {
	const { fetchCountries } = useCountryStore();

	useEffect(() => {
		fetchCountries();
	}, [fetchCountries]);

	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route Component={PageLayout}>
						<Route path="/" Component={HomePage} />
						<Route path="*" Component={() => <Navigate to="/" />} />
						<Route path="/countries/:code" Component={CountryDetails} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
