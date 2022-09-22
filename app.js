const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const root = require("./routes/root");
const publicPath = __dirname;
const port = 3000;

app.use(cors());
app.use(express.static(publicPath));
app.use(express.json());

app.get("/", (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})
app.use("/feedback", root);



try {
    app.listen(port);
    console.log("Server running on port " + port);
} catch (error) {
    throw error
}