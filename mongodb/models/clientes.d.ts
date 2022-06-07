import { Endereco } from "./enderecos"
import { Pedido } from "./pedidos"

export interface Clientes {
	clientId: number
	companyName: string
	address: Endereco
	orders: Array<Pedido>
}
