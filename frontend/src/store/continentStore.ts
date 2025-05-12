import { create } from "zustand";
import { client } from "../api/client.ts";
import { GET_CONTINENTS } from "../api/queries.ts";
import type { ContinentType } from "../@types/data.t.ts";

type ContinentState = {
	continents: ContinentType[];
	fetchContinents: () => Promise<void>;
};

export const useContinentStore = create<ContinentState>((set) => ({
	continents: [],
	fetchContinents: async () => {
		try {
			const { data } = await client.query({
				query: GET_CONTINENTS,
				fetchPolicy: "network-only",
			});
			if (data) {
				set({ continents: data.continents });
			}
		} catch (error) {
			console.error("Error fetching continents:", error);
		}
	},
}));
