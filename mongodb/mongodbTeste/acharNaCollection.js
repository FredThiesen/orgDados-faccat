var mongoClient = require("mongodb").MongoClient
var url =
	"mongodb://testemongo:ttenRzROtn1hKN2wYvdRuFExkil8jwEBXzHY8AVjJsE1Q501FfzEiLe5lo3Nzhu341G0RoLd43NT6PLh3kcA9A==@testemongo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@testemongo@"

const DATABASE_NAME = "testemongo"
const COLLECTION_NAME = "pessoas"

mongoClient.connect(url, function (err, db) {
	if (err) throw err
	var dbo = db.db(DATABASE_NAME)
	dbo.collection(COLLECTION_NAME).findOne({}, function (err, result) {
		if (err) throw err
		console.log(result)
		db.close()
	})
})
