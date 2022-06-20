var { create } = require("xmlbuilder2")
var fs = require("fs")

const randomName = () => {
	var vowels = "aeiou".split("")
	var consonants = "bcdfghjklmnpqrstvwxyz".split("")
	var name = ""
	var random = Math.floor(Math.random() * 2)
	for (let i = 0; i < 6; i++) {
		if (random == 0) {
			name += vowels[Math.floor(Math.random() * vowels.length)]
		} else {
			name += consonants[Math.floor(Math.random() * consonants.length)]
		}
		random = Math.floor(Math.random() * 2)
	}
	return name
}

let i = 0
while (i < 30) {
	var root = create({ version: "1.0", encoding: "UTF-8" })
		.ele("root")
		.ele("nome")
		.txt(randomName())
		.up()
		.ele("idade")
		.txt(Math.floor(Math.random() * 100))
		.up()
		.up()

	// save xmlDoc to xml file
	fs.writeFile(
		`arquivo${i}.xml`,
		root.end({ prettyPrint: true }),
		function (err) {
			if (err) throw err
			console.log("Saved!")
		}
	)
	i++
}
