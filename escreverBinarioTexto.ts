// read from registroAlunos.json and write a binary file with the data

var fs = require("fs")

var registroAlunos = fs.readFileSync("registroAlunos.json")

console.log(registroAlunos)

interface Student {
	name: string
	age: number
	key: number
}

interface Alunos {
	alunos: Student[]
}

// const getBinaryString = (data: Alunos) => {
// 	let binaryString = ""
// 	binaryString = JSON.stringify(data)
// 		.split("")
// 		.map(function (char) {
// 			return char.charCodeAt(0).toString(2)
// 		})
// 		.join(" ")
// 	// console.log(binaryString)
// 	return binaryString
// }

var wstream = fs.createWriteStream("testeBuffer")
wstream.on("finish", function () {
	console.log("file has been written")
})

// const binaryString = getBinaryString(registroAlunos)

//write binaryString to file
wstream.write(Buffer.from(JSON.stringify(registroAlunos)))
// console.log("buffer.from", Buffer.from(Int16Array.from(registroAlunos).buffer))
// wstream.write(Buffer.from(Int16Array.from(registroAlunos).buffer))
wstream.end()

// convert data to JSON string
