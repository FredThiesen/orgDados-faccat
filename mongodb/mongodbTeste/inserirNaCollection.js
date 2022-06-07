var mongoClient = require("mongodb").MongoClient
var url =
	"mongodb://testemongo:ttenRzROtn1hKN2wYvdRuFExkil8jwEBXzHY8AVjJsE1Q501FfzEiLe5lo3Nzhu341G0RoLd43NT6PLh3kcA9A==@testemongo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@testemongo@"

const DATABASE_NAME = "testemongo"
const COLLECTION_NAME = "pessoas"

const products = [
	{
		productNumber: 123451,
		productName: "escova de dentes",
		quantityPerUnit: 2,
		unitPrice: 14.0,
	},
]

const items = [
	{
		orderNumber: 123,
		itemNumber: 12345,
		quantity: 2,
		unitPrice: 14.5,
		products: products,
	},
]

const orders = [
	{
		orderNumber: 1,
		clientId: 1,
		orderDate: new Date("2017-01-01"),
		deliveryDate: new Date("2017-01-15"),
		items: items,
	},
]

const address = {
	addressId: 0,
	streetName: "Rua teste",
	cityName: "Cidade teste",
	postalCode: "12341-000",
	countryName: "Brazuca",
	phoneNumber: "12341-1234",
}

const CLIENTE_MOCK = {
	clientId: 1,
	companyName: "seilaCorp",
	address: address,
	orders: orders,
}

const data = CLIENTE_MOCK

mongoClient.connect(url, function (err, db) {
	console.log(db)
	if (err) throw err
	var dbo = db.db(DATABASE_NAME)
	dbo.collection(COLLECTION_NAME).insertOne(data, function (err, res) {
		if (err) throw err
		console.log("Clientes inseridos")
		db.close()
	})
})
