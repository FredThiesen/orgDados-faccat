import { Produtos } from "./produtos"

export interface Itens {
	orderNumber: number
	itemNumber: number
	quantity: number
	unitPrice: number
	products: Array<Produtos>
}
