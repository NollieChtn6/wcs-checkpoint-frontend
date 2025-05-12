import { useNavigate } from "react-router-dom";
import type { CountryType } from "../@types/data.t";

export type CountryButtonProps = {
	country: CountryType;
};

export function CountryButton({ country }: CountryButtonProps) {
	const navigate = useNavigate();

	return (
		<button
			type="button"
			onClick={() => navigate(`/countries/${country.code}`)}
		>
			{country.name}&nbsp;{country.emoji}
		</button>
	);
}
