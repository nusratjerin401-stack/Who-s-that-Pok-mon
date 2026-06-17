const express = require ("express");
const axios = require("axios");


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

app.get("/hint/:game_id/:n", async (req, res)=>{
    const {game_id, n} = req.params;
   const pokemonID = Number(
    Buffer.from(game_id, "base64").toString()
   );  
   axios
   .get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
   .then ((response)=> {
    if (Number(n)===1) {
        res.json({
            hint:1,
            value: response.data.moves[0]?.move?.name,
        });
    }
   })
   .catch(() => {
    res.status(500).json ({
        error: "Failed to fetch Pokemon",
    });
   });
})

 app.listen(3000, ()=> {
    console.log("Server running on port 3000");
 });  

 
 