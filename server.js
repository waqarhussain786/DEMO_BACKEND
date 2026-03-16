const express = require("express");

const app = express();

const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("sever is running");
});

app.listen(PORT, () => {
    console.log(`server is live on http://localhost:${PORT}`);
});