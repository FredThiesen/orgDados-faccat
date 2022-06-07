import { Itens } from "./itens"

export interface Pedido {
	orderNumber: number
	clientId: number
	orderDate: Date
	deliveryDate: Date
	items: Array<Itens>
}
