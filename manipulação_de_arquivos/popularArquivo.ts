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

const writeData = (newData: User[]) => {
	const newFileData = {
		names: newData,
	}
	fs.writeFileSync("arquivoPopulado.json", JSON.stringify(newFileData))
}

const generateUserArray = () => {
	let userArray: User[] = []
	for (let i = 0; i < 100; i++) {
		let user: User = {
			name: generateRandomName(),
			key: i,
		}
		userArray.push(user)
	}
	return userArray
}

const generateRandomName = () => {
	let name: string = ""

	for (let i = 1; i <= 5; i++) {
		name += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
	}
	return name
}
writeData(generateUserArray())
