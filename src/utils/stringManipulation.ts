export const prettifyAddress = (address: string) => {
	return address.split('https://').at(-1)?.split('http://').at(-1)?.split('www.').at(-1);
};
