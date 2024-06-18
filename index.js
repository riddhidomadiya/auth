const express = require("express")
const app = express()
app.use(express.json())
const port = process.env.PORT || 80
require("./db/db")

const User = require("./user")

app.post('/user', async (req, res) => {
    const user = await User.create(req.body)
    res.send(user)
});

app.get('/user', async (req, res) => {
	const user = await User.find({})
    res.send(user)
});

app.get('/', async (req, res) => {
	res.send("backend api run on server...");
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})
