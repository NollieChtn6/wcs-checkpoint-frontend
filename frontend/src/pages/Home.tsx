import { CountriesList } from "../components/CountriesList";

export function HomePage() {
	return (
		<div className="home-container">
			<div className="list-container">
				<h2>🌎 Tous les pays</h2>
				<CountriesList />
			</div>
			<div className="form-container">
				<h2>➕ Ajouter un pays</h2>
			</div>
		</div>
	);
}
