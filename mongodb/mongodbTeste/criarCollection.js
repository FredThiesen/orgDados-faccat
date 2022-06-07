var mongoClient = require("mongodb").MongoClient
var url =
	"mongodb://testemongo:ttenRzROtn1hKN2wYvdRuFExkil8jwEBXzHY8AVjJsE1Q501FfzEiLe5lo3Nzhu341G0RoLd43NT6PLh3kcA9A==@testemongo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@testemongo@"

const DATABASE_NAME = "testemongo"
const COLLECTION_NAME = "pessoas"

mongoClient.connect(url, function (err, db) {
	console.log(db)
	if (err) throw err
	var dbo = db.db(DATABASE_NAME)
	dbo.createCollection(COLLECTION_NAME, function (err, res) {
		if (err) throw err
		console.log(`Collection ${COLLECTION_NAME} foi criada.`)
		db.close()
	})
})
