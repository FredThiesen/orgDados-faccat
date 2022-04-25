var fs = require("fs")
var fileRawData = fs.readFileSync("text.json")

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

const sortData = (fileData: FileData, inputData: User) => {
	let concatArray = [...fileData.names, inputData]
	let sortedArray = concatArray.sort((a, b) => {
		return a.key - b.key
	})
	return sortedArray
}

const writeData = (inputData: User) => {
	const sortedData: User[] = sortData(fileData, inputData)
	const newFileData = {
		names: sortedData,
	}
	fs.writeFileSync("text.json", JSON.stringify(newFileData))
}

let newUser: User = { name: "", key: 0 }

let readline = require("readline")
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question("insira a chave do novo usuário", (answer: number) => {
	newUser.key = answer
	rl.question("insira o nome do novo usuário: ", (answer: string) => {
		newUser.name = answer
		rl.close()
		writeData(newUser)
	})
})

writeData(newUser)
