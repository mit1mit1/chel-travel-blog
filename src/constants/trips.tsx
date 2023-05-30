import type { Link, LocationInfo, TripInfo } from '../types';


export const sydney: LocationInfo = {
	name: "Sydney",
	caption: "Pretty good city, we like it.",
	type: "city",
	childLocations: [],
	position: {
		latitude: -33.8688,
		longitude: 151.2093,
		elevation: 3,
	},
	ratings: [],
}

// AUCKLAND


export const umuSourdoughPizza: LocationInfo = {
	name: "Umu Pizza",
	type: "restaurant",
	details: [
		{
			type: "foodItem",
			name: "Number 4 Pizza + Sweet Sting with hot honey",
			descriptionHTML: "Sourdough base, lot of cheese, a touch of mushroom and fancier ham, and a drizzle of chilli honey. The sourdough was <i>really</i> good, and the honey complimented the flavour super well.",
			ratings: [
				{
					rater: "Mitch",
					numerator: 8,
					denominator: 10,

				},
				{
					rater: "Rachel",
					numerator: 9,
					denominator: 10,

				},
			]
		},
		{
			type: "foodItem",
			name: "Nutella Calzone",
			descriptionHTML: "Fresh hot sourdough filled and drizelled with sticky halzenut cocoa, what's not to love?",
			ratings: [
				{
					rater: "Mitch",
					numerator: 9,
					denominator: 10,

				},
				{
					rater: "Rachel",
					numerator: 8.5,
					denominator: 10,

				},
			]
		},
		{
			type: "vibe",
			descriptionHTML: "Felt good for a date, but maybe even more fun for a larger group?",
			ratings: [
				{
					numerator: 9,
					denominator: 10,
				}
			],
		}
	],
	url: "https://www.umupizza.co.nz/",
	position: {
		latitude: -36.8718599, longitude: 174.7422488,
	},
	ratings: [],
	childLocations: [],
}

export const edenParkMotel: LocationInfo = {
	name: "Asure AT Eden Park",
	childLocations: [],
	type: "accomodation",
	url: "https://www.edenparkmotel.co.nz/",
	caption: "Very clean and functional room with nice staff, and Kingsland has a lot of cool stuff",
	position: {
		latitude: -36.8732403,
		longitude: 174.7417484,
	},
	ratings: [{
		numerator: 8,
		denominator: 10,
	}],


}

export const auckland: LocationInfo = {
	name: "Auckland",
	caption: "Lot of cool stuff but the roads are trassshhh.",
	type: "city",
	childLocations: [umuSourdoughPizza, edenParkMotel],
	position: {
		latitude: -36.8509,
		longitude: 174.7645,
		elevation: 196,
	},
	ratings: []
}


export const earth: LocationInfo = {
	name: "Planet Earth",
	caption: "A dark and dreary place, full of pain and suffering. Gave rise to several David Attenborough documentaries though, so that's cool.",
	type: "planet",
	ratings: [],
	childLocations: [sydney, auckland],
}


// LINKS

export const flySydneyToAuckland: Link = {
	name: "Jetstar flight: Sydney to Auckland",
	startLocation: sydney,
	endLocation: auckland,
	detailsHTML: "Flight scheduled to depart 9am Sydney time, so we got up a bit after 5am to get to T1 Terminal by 6am sharp.",
	ratings: [],
}



export const tripList: Array<TripInfo> = [
	{
		name: 'Berry',
		description: 'A country town in NSW.',
		iconName: 'musicle.ico'
	},
	{
		name: 'Kiama',
		description: 'A country town in NSW.',
		iconName: 'newtonian.png'
	},
	{
		name: 'Bowral',
		description: `A country town in NSW.`,
		iconName: 'beanie.ico'
	},
	{
		name: 'Leura',
		description: 'A country town in NSW.',
		iconName: 'mandlebrot.ico'
	}
];
