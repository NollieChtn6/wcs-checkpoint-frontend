import { useCountryStore } from "../store/countryStore";
import { CountryButton } from "./CountryButton";

export function CountriesList() {
	const { countries } = useCountryStore();
	return (
		<div className="countries-list">
			{countries.map((country) => (
				<CountryButton key={country.id} country={country} />
			))}
		</div>
	);
}
