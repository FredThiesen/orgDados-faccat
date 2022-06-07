import { Clientes } from "../models/clientes"
import { Endereco } from "../models/enderecos"
import { Itens } from "../models/itens"
import { Pedido } from "../models/pedidos"
import { Produtos } from "../models/produtos"

const products: Array<Produtos> = [
	{
		productNumber: 123451,
		productName: "escova de dentes",
		quantityPerUnit: 2,
		unitPrice: 14.0,
	},
]

const items: Array<Itens> = [
	{
		orderNumber: 123,
		itemNumber: 12345,
		quantity: 2,
		unitPrice: 14.5,
		products: products,
	},
]

const orders: Array<Pedido> = [
	{
		orderNumber: 1,
		clientId: 1,
		orderDate: new Date("2017-01-01"),
		deliveryDate: new Date("2017-01-15"),
		items: items,
	},
]

const address: Endereco = {
	addressId: 0,
	streetName: "Rua teste",
	cityName: "Cidade teste",
	postalCode: "12341-000",
	countryName: "Brazuca",
	phoneNumber: "12341-1234",
}

export const CLIENTE_MOCK: Clientes = {
	clientId: 1,
	companyName: "seilaCorp",
	address: address,
	orders: orders,
}
