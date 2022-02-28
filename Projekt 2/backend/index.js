const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors());

const db = require ('./models')

const police_officers_router = require ('./routes/police_officer.js')
app.use("/police_officer", police_officers_router);
const reports_router = require ('./routes/reports.js')
app.use("/reports", reports_router);
const login = require ('./routes/login.js')
app.use("/login", login);

// connection to database
db.sequelize.sync().then(() => {
	app.listen(3001, () => {
		console.log("Server running on port 3001");
	})
})