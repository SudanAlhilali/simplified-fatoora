import { Tag, tagsToBase64, toBase64, toHex, toTlv } from '../src';
import { Buffer } from 'buffer';

test('tagsToBase64() generates a valid base64 string from tags', () => {
	const tags: Tag[] = [
		new Tag(1, 'Sudan'),
		new Tag(2, '123456789'),
		new Tag(3, '2022-01-09T00:38'),
		new Tag(4, '2670.00'),
		new Tag(5, '200.00'),
	];
	expect(tagsToBase64(tags))
		.toBe('AQVTdWRhbgIJMTIzNDU2Nzg5AxAyMDIyLTAxLTA5VDAwOjM4BAcyNjcwLjAwBQYyMDAuMDA=');
});

test('toBase64() generates a valid base64 string from tags using toTlv()', () => {
	const tags: Tag[] = [
		new Tag(1, 'Sudan'),
		new Tag(2, '123456789'),
		new Tag(3, '2022-01-09T00:38'),
		new Tag(4, '2670.00'),
		new Tag(5, '200.00'),
	];
	expect(toBase64(toTlv(tags)))
		.toBe('AQVTdWRhbgIJMTIzNDU2Nzg5AxAyMDIyLTAxLTA5VDAwOjM4BAcyNjcwLjAwBQYyMDAuMDA=');
});

test('toHex() generates a valid hex string utf-8 encoded', () => {
	const hexStrInUtf8 = toHex(23);
	const hexStrInHex = Buffer
		.from(hexStrInUtf8, 'utf-8')
		.toString('hex');
	
	expect(parseInt(hexStrInHex, 16))
		.toBe(23);
});
