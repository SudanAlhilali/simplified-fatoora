import { Invoice, toBase64 } from '../src';

test('Invoice.toTlv() returns a valid base64 string using toBase64()', () => {
	const invoice = new Invoice({
		sellerName: 'Sudan',
		vatRegistrationNumber: '123456789',
		invoiceTimestamp: '2022-01-09T00:38',
		invoiceTotal: '2670.00',
		invoiceVatTotal: '200.00',
	});

	expect(toBase64(invoice.toTlv()))
		.toBe('AQVTdWRhbgIJMTIzNDU2Nzg5AxAyMDIyLTAxLTA5VDAwOjM4BAcyNjcwLjAwBQYyMDAuMDA=');
});

