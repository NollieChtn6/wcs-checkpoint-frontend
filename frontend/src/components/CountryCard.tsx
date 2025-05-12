import type { CountryType } from "../@types/data.t";

type CountryCardProps = {
	country: CountryType;
};

export function CountryCard({ country }: CountryCardProps) {
	return (
		<div className="country-card">
			<div className="flag">{country.emoji}</div>
			<h2>{country.name}</h2>
			<p>
				<strong>Code&nbsp;:</strong> {country.code}
			</p>
			{country.continent && (
				<p>
					<strong>Continent&nbsp;:</strong> {country.continent.name}
				</p>
			)}
		</div>
	);
}
