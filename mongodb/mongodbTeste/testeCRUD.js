var mongoClient = require("mongodb").MongoClient
mongoClient.connect(
	"mongodb://testemongo:ttenRzROtn1hKN2wYvdRuFExkil8jwEBXzHY8AVjJsE1Q501FfzEiLe5lo3Nzhu341G0RoLd43NT6PLh3kcA9A==@testemongo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@testemongo@",
	function (err, db) {
		console.log(db)
		db.close()
	}
)
