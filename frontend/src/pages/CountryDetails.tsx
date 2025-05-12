import { useParams, useNavigate } from "react-router-dom";
import { useCountryStore } from "../store/countryStore";
import { CountryCard } from "../components/CountryCard";

export function CountryDetails() {
	const { code } = useParams();
	const navigate = useNavigate();
	const { countries } = useCountryStore();

	const navigateToHome = () => {
		navigate("/");
	};

	const country = countries.find(
		(country) => country.code === code?.toUpperCase(),
	);

	if (!country) {
		return (
			<p style={{ padding: "2rem", textAlign: "center" }}>Pays non trouvé.</p>
		);
	}
	return (
		<div className="country-details">
			<CountryCard country={country} />
			<div style={{ textAlign: "center" }}>
				<button
					type="button"
					onClick={() => navigateToHome()}
					className="back-button"
				>
					<span className="icon">⬅️</span>
					<span>Retour</span>
				</button>
			</div>
		</div>
	);
}
