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

// QUEENSTOWN

// The blue kanu
// The booking was fairly early (5:30pm), so the restaurant was fairly quiet - and the service was fast!

// Food and drinks were great. We had:

// Entrees:
// - Goat Randang Bao Bun: probably the best bao I've ever had, and I've had a lot. Savory, strong, glorious.
// - Fijian market fish kokoda: normally I'm not a huge fish fan, but this was really light and refreshing.
// - Prawn and scallop toast: not sure if this is blasphemous or not, but I made little sandwiches using the toast and the fish, and it was delicious.

// Mains:
// - Caramel and Coconut Pork belly with a side of coconut rice: this was very reminiscent of a massaman curry. Good, but a bit heavy - recommend getting this to split 3-4 ways so you can enjoy just a taste of it.

// Dessert:
// - Koko samoa cheesecake: a classic chocolate cheesecake with a few nice little tweaks, delightful ending.

// Drinks:
// - Lava Flow: I normally don't like anything alcoholic, but this was a tangy and delicious mix of coconut, pineapple and cherry, and I loved it.


// Haka Lodge
// Hi, this is a very late reply but better late than never I suppose.

// There were a couple of things that in my opinion could have improved my stay:

//  - I didn't initially realise there was a large kitchen, so I used the lounge kitchen for the first couple of days, which was a bit overfull and not super clean - perhaps this could be better signed/put on a map/explained more explicitly to guests on arrival;
//  - We were in the downstairs room immediately next to the car park, and there is a lounge just outside the room - someone was sitting in the lounge coughing most of the night. I guess it was either keep us up or keep their roommates up, but if it is possible to move that lounge to somewhere further away from bedrooms that would be great;

// That said, it is a great location, the staff were all very friendly and helpful, and the other guests were all perfectly polite, and we very much enjoyed our time in Queenstown, so thank you for making that possible!



// ROTORUA

// Rock solid backpackers
// Location: great spot, 5 minutes walk to grocery stores in one direction, 5 minutes walk to eat street in the other.

// Comfort: clean servicable rooms, nothing special but that's kinda the point of a backpackers - and impressively no smell of sulphur indoors. It was a bit noisy - had to use earplugs to block a bit of street noise + noise from adjacent rooms when we were sleeping.

// Service: staff were super friendly and helpful, we were running late but they helped organise late check in for us.

// Vibe: we didn't go out of our way to get to know anyone, but the people we did interact with were all nice. Seemed like there were some boards around for people to organise car pooling and such, and the rock wall was very popular.


// Hells Gate
// The park itself is a blighted, sulphury, rocky mess - well worth a walk through. There's a random stretch of rainforest in the middle of it, and it's like walking out of Mordor, into Rivendell, then back into Mordor again.

// At the end of the walk through the park there was a little hut where they let you carve some pre-drawn patterns into little wooden coasters. Good fun, and a nice memento - and gives you a much better appreciation for the 3 meter tall Maori carving next to the hut.

// The mud spa was also pleasant - not sure it was thaaaat different to  a normal spa, but hey, a fun twist, and very relaxing either way. Particularly recommend after a few days of hiking.


// AUCKLAND

// Thrifty Vehicle Hire
// Super helpful. Had an issue connecting to the wifi and didn't have international data set up yet, so person at counter let me use their phone to sign online form. Car was clean and nifty. Was a bit worried about getting some tar stuck on the sides on the highway and tried to get it off at a servo, but needn't have worried I think - a quick wash of the windshields would have sufficed (as the person manning the servo somewhat angrily told me with gestures).
// Website was super dodgy though, struggled to make it work (think I used the element inspector to enable a button at one point). Thrifty NZ, if you're listening, please pay me to fix your website.


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
