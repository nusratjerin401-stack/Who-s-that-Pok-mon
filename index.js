const express = require ("express");

const app = express();

app .get("/", (req, res) => {
    res.json({
        message: "Who's That Pokémon API",
        });
    });

    
 app.listen(3000, ()=> {
    console.log("Server running on port 3000");
 });  

 
 