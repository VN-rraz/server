const express = require("express")
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.json({message: "Leo vacilão"})
})

app.listen(3000, () => {
    console.log("ta no ar!!!")
})