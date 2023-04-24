import { prettifyAddress } from './stringManipulation';
import { describe, expect, it } from 'vitest';

describe('prettifyAddress', () => {
	it('strips the first https', () => {
		expect(prettifyAddress('https://somewebsite.com')).toEqual('somewebsite.com');
	});

	it('strips the first http', () => {
		expect(prettifyAddress('http://somewebsite.com.au')).toEqual('somewebsite.com.au');
	});

	it('strips the first www', () => {
		expect(prettifyAddress('www.somewebsite.gov.com')).toEqual('somewebsite.gov.com');
	});

	it('strips a combination of ugly prefixes', () => {
		expect(prettifyAddress('https://www.some-other-website.com?foo=bar')).toEqual(
			'some-other-website.com?foo=bar'
		);
	});
});
