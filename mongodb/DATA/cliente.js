const products = [
	{
		productNumber: 123451,
		productName: "escova de dentes",
		quantityPerUnit: 2,
		unitPrice: 14.0,
	},
]

const items = [
	{
		orderNumber: 123,
		itemNumber: 12345,
		quantity: 2,
		unitPrice: 14.5,
		products: products,
	},
]

const orders = [
	{
		orderNumber: 1,
		clientId: 1,
		orderDate: new Date("2017-01-01"),
		deliveryDate: new Date("2017-01-15"),
		items: items,
	},
]

const address = {
	addressId: 0,
	streetName: "Rua teste",
	cityName: "Cidade teste",
	postalCode: "12341-000",
	countryName: "Brazuca",
	phoneNumber: "12341-1234",
}

export const CLIENTE_MOCK = {
	clientId: 1,
	companyName: "seilaCorp",
	address: address,
	orders: orders,
}
