const express = require ("express");

const app = express();

app .get("/", (req, res) => {
    res.json({
        message: "Who's That Pokémon API",
        });
    });


app.get("/new",(req, res) => {
    const randomPokemonID =
    Math.floor(Math.random() * 1025) + 1;
   const gameID = Buffer.from (
    String(randomPokemonID)
   ).toString("base64");

   res.json({
    game_id: gameID,
    hints: 5,
   });
}); 
 app.listen(3000, ()=> {
    console.log("Server running on port 3000");
 });  