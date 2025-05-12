import { useCountryStore } from "../store/countryStore";
import { CountryButton } from "./CountryButton";

export function CountriesList() {
	const { countries, isLoading } = useCountryStore();

	if (isLoading) {
		return <p>Chargement des pays encore...</p>;
	}

	if (countries.length === 0) {
		return <p>Aucun pays trouvé.</p>;
	}
	return (
		<div className="countries-list">
			{countries.map((country) => (
				<CountryButton key={country.id} country={country} />
			))}
		</div>
	);
}
