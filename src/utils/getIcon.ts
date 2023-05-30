import type { Detail, LocationInfo } from '../types';

export const getTypeIcon = (location: LocationInfo) => {
	if (location.type === 'city') {
		return '🏙️';
	} else if (location.type === 'restaurant') {
		return '🍔';
	} else if (location.type === 'planet') {
		return '🪐';
	} else if (location.type === 'accomodation') {
		return '🛏️';
	}
};

export const getDetailIcon = (detail: Detail) => {
	if (detail.type === 'foodItem') {
		return '🍔';
	} else if (detail.type === 'vibe') {
		return '🏙️';
	} else if (detail.type === 'cleanness') {
		return '🪐';
	} else if (detail.type === 'noise') {
		return '🛏️';
	}
};
