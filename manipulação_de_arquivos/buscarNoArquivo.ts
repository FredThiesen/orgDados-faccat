var fs = require("fs")
var fileRawData = fs.readFileSync("arquivopopulado.json")
const initialUser = { name: "", key: 0 }

interface User {
	name: string
	key: number
}

interface FileData {
	names: User[]
}

const parseData = (data: string) => {
	return JSON.parse(data)
}

const fileData: FileData = parseData(fileRawData)

let newUser: User = initialUser

let readline = require("readline")
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

const buscaSequencial = (key: number, array: User[]) => {
	let user: User = initialUser
	let iteracoes = 0

	for (let i = 0; i < array.length; i++) {
		iteracoes++
		if (array[i].key == key) {
			user = array[i]
			break
		}
	}
	console.log("numero de iterações sequencial: ", iteracoes)
	if (user.name !== "") {
		return user
	} else {
		return null
	}
}

const buscaBinaria = (key: number, array: User[]) => {
	let start = 0
	let end = array.length - 1
	let middle = Math.floor((start + end) / 2)
	let iteracoes = 0

	while (array[middle].key !== key && start <= end) {
		if (key < array[middle].key) {
			end = middle - 1
		} else {
			start = middle + 1
		}
		middle = Math.floor((start + end) / 2)
		iteracoes++
	}
	console.log("numero de iterações binaria: ", iteracoes)
	if (array[middle].key == key) {
		return array[middle]
	}
	return null
}

// consertar
const buscaHashing = (key: number, array: User[]) => {
	const hashMap = array.map((user) => user.name)
	const result = hashMap[key]
	console.log(
		"na busca hashing, se sempre houver 1 valor no hashmap para cada\n valor, sempre será 1 iteração apenas."
	)
	return result
}

rl.question(
	"insira a chave a ser buscada (sequencial): \n",
	(answer: number) => {
		const user = buscaSequencial(answer, fileData.names)

		if (user) {
			console.log(`O usuario com a chave ${answer} é ${user.name}`)
			console.log(user)
		} else {
			console.log("não foi possível encontrar o usuário")
		}
		rl.question(
			"insira a chave a ser buscada (binaria): \n",
			(answer: number) => {
				const user = buscaBinaria(answer, fileData.names)

				if (user) {
					console.log(
						`O usuario com a chave ${answer} é ${user.name}`
					)
					console.log(user)
				} else {
					console.log("não foi possível encontrar o usuário")
				}
				rl.question(
					"insira a chave a ser buscada (hashing): \n",
					(answer: number) => {
						const user = buscaHashing(answer, fileData.names)

						if (user) {
							console.log(
								`O usuario com a chave ${answer} é ${user}`
							)
							console.log(user)
						} else {
							console.log("não foi possível encontrar o usuário")
						}
						rl.close()
					}
				)
			}
		)
	}
)
