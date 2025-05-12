export type CountryType = {
	id: number;
	name: string;
	code: string;
	continent: {
		name: string;
	};
	emoji: string;
};

export type NewCountryFormData = {
	name: string;
	code: string;
	emoji: string;
	continent: string;
};

export type ContinentType = {
	id: number;
	name: string;
};
