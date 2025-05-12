import { useEffect, useState } from "react";
import { useContinentStore } from "../store/continentStore";
import { useCountryStore } from "../store/countryStore";
import type { ContinentType, NewCountryFormData } from "../@types/data.t";

export function NewCountryForm() {
	const { continents, fetchContinents } = useContinentStore();
	const { createCountry, isProcessing } = useCountryStore();

	const [errorMessage, setErrorMessage] = useState<string>("");
	const [formData, setFormData] = useState<NewCountryFormData>({
		name: "",
		code: "",
		emoji: "",
		continent: "",
	});

	useEffect(() => {
		fetchContinents();
	}, [fetchContinents]);

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setErrorMessage("");
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		try {
			console.log("Submitted country data:", formData);
			createCountry(formData);
			setFormData({ name: "", code: "", emoji: "", continent: "" });
			setErrorMessage("");
		} catch (error) {
			setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
			console.error("Form error:", error);
		}
	};

	return (
		<form className="country-form" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="name">Nom</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="code">Code</label>
				<input
					type="text"
					id="code"
					name="code"
					value={formData.code}
					onChange={handleInputChange}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="flag">Drapeau</label>
				<input
					type="text"
					id="emoji"
					name="emoji"
					value={formData.emoji}
					onChange={handleInputChange}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="continent">Continent</label>
				<select
					id="continent"
					name="continent"
					value={formData.continent}
					onChange={handleInputChange}
					required
				>
					<option value="" disabled>
						Sélectionner un continent...
					</option>
					{continents.map((continent: ContinentType) => (
						<option key={continent.id} value={continent.id}>
							{continent.name}
						</option>
					))}
				</select>
			</div>

			{errorMessage && <p className="error-message">{errorMessage}</p>}
			<button type="submit" className="submit-btn" disabled={isProcessing}>
				{isProcessing ? "Sauvegarde en cours..." : "Sauvegarder"}
			</button>
		</form>
	);
}
