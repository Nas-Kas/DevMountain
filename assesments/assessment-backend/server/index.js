const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment, 
    getFortune,
    getFortunes,
    createFortune,
    deleteFortune,
    updateFortune
} = require('./controller')

//compliments
app.get("/api/compliment", getCompliment);

//fortunes
app.get("/api/fortune", getFortune);
app.get("/api/fortunes", getFortunes);

app.post("/api/fortune", createFortune);

app.delete("/api/fortune/:id", deleteFortune);

app.put("/api/fortune/:id", updateFortune);

app.listen(4000, () => console.log("Server running on 4000"));
