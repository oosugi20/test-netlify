const contentful = require('contentful')
const client = contentful.createClient({
	space: '316ephbytmst',
	accessToken: 'yKLot1yuOzl-1AfvNeAMK4IYvL5PyUCSm1qhx207yiw',
})

client.getEntry('4Hrnb5S6nnYq7PK3h8sZvl')
	.then((entry) => {
		console.log(entry)
	})
