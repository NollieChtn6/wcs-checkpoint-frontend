import { create } from "zustand";
import { client } from "../api/client.ts";
import { GET_COUNTRIES } from "../api/queries.ts";
import { CREATE_COUNTRY } from "../api/mutations.ts";

import type { CountryType, NewCountryFormData } from "../@types/data.t.ts";

type CountryState = {
	isLoading: boolean;
	isProcessing: boolean;
	countries: CountryType[];
	fetchCountries: () => Promise<void>;
	createCountry: (country: NewCountryFormData) => Promise<void>;
};

export const useCountryStore = create<CountryState>((set) => ({
	isLoading: false,
	isProcessing: false,
	countries: [],

	fetchCountries: async () => {
		set({ isLoading: true });
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
		} finally {
			set({ isLoading: false });
		}
	},

	createCountry: async (formData: NewCountryFormData) => {
		set({ isProcessing: true });
		try {
			await client.mutate({
				mutation: CREATE_COUNTRY,
				variables: {
					data: {
						name: formData.name,
						code: formData.code,
						emoji: formData.emoji,
						continent: formData.continent,
					},
				},
			});
			console.log("Country created successfully");
			await useCountryStore.getState().fetchCountries();
		} catch (error) {
			console.error("Erreur while creating country:", error);
		} finally {
			set({ isProcessing: false });
		}
	},
}));
