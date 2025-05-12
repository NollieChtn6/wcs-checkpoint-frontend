import { CountriesList } from "../components/CountriesList";
import { NewCountryForm } from "../components/NewCountryForm";

export function HomePage() {
	return (
		<div className="home-container">
			<div className="list-container">
				<h2>🌎 Tous les pays</h2>
				<CountriesList />
			</div>
			<div className="form-container">
				<h2>➕ Ajouter un pays</h2>
				<NewCountryForm />
			</div>
		</div>
	);
}
