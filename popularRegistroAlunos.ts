var fs = require("fs")

interface User {
	name: string
	age: number
	key: number
}

interface FileData {
	alunos: User[]
}

const parseData = (data: string) => {
	return JSON.parse(data)
}

const writeData = (newData: User[]) => {
	const newFileData = {
		alunos: newData,
	}
	fs.writeFileSync("registroAlunos.json", JSON.stringify(newFileData))
}

const generateUserArray = () => {
	let userArray: User[] = []
	for (let i = 0; i < 400; i++) {
		let user: User = {
			name: generateRandomName(),
			age: Math.floor(Math.random() * 30 + 18),
			key: i,
		}
		userArray.push(user)
	}
	return userArray
}
const generateRandomConsonant = () => {
	const consonants = "bcdfghjklmnpqrstvwxyz"
	const randomNumber = Math.floor(Math.random() * consonants.length)
	return consonants[randomNumber]
}

const generateRandomVowel = () => {
	const vowels = "aeiou"
	const randomNumber = Math.floor(Math.random() * vowels.length)
	return vowels[randomNumber]
}

const generateRandomName = () => {
	let name: string = ""
	for (let i = 0; i < 6; i++) {
		if (i % 2 === 0) {
			name += generateRandomConsonant()
		} else {
			name += generateRandomVowel()
		}
	}
	name = name.charAt(0).toUpperCase() + name.slice(1)

	return name
}
writeData(generateUserArray())
