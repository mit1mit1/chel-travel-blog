export type TripInfo = {
	name: string;
	description?: string;
	iconName?: string;
};

type Position = {
	// Degrees, positive === North, negative === South
	latitude: number;
	// Degrees, positive === East, negative === West
	longitude: number;
	// Metres above sea level
	elevation?: number;
};

export type Rating = {
	rater?: 'Mitch' | 'Rachel';
	numerator: number;
	denominator: number;
};

export type Detail = {
	type?: 'foodItem' | 'vibe' | 'cleanness' | 'noise';
	name?: string;
	descriptionHTML: string;
	ratings: Array<Rating>;
};

export type Link = {
	name: string;
	startLocation: LocationInfo;
	endLocation: LocationInfo;
	detailsHTML: string;
	ratings: Array<Rating>;
};

export type LocationInfo = {
	name: string;
	caption?: string;
	details?: Array<Detail>;
	childLocations: Array<LocationInfo>;
	type: 'city' | 'restaurant' | 'planet' | 'accomodation';
	position?: Position;
	url?: string;
	ratings: Array<Rating>;
};
