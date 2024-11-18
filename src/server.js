import express from "express";

const app = express();

const hostname = 'localhost';
const port = 8017;
app.get("/", (req, res) => {
    res.send("Hello from Hiep Hoang");
});
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});