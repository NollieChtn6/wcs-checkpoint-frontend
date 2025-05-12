import { create } from "zustand";
import { client } from "../api/client.ts";
import { GET_COUNTRIES } from "../api/queries.ts";
import type { CountryType } from "../@types/data.t.ts";

type CountryState = {
	countries: CountryType[];
	fetchCountries: () => Promise<void>;
};

export const useCountryStore = create<CountryState>((set) => ({
	countries: [],
	fetchCountries: async () => {
		try {
			const { data } = await client.query({
				query: GET_COUNTRIES,
				fetchPolicy: "network-only",
			});
			if (data) {
				set({ countries: data.countries });
			}
		} catch (error) {
			console.error("Error fetching countries:", error);
		}
	},
}));
