import express from "express";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Who's That Pokémon API",
  });
});

app.get("/new", (req, res) => {
  const randomPokemonID =
    Math.floor(Math.random() * 1025) + 1;

  const gameID = Buffer.from(
    String(randomPokemonID)
  ).toString("base64");

  res.json({
    game_id: gameID,
    hints: 5,
  });
});


app.get("/hint/:game_id/:n", (req, res) => {

  const { game_id, n } = req.params;

  const pokemonID = Number(
    Buffer.from(game_id, "base64").toString()
  );

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then((response) => response.json())
    .then((data) => {
      
      
        if (Number(n) === 1) {
        return res.json({
          hint: 1,
          value: data.moves[0].move.name,
        });
      }
        if (Number(n) === 2) {
        return res.json({
          hint: 2,
          value: data.moves[1].move.name,
        });
      }

        if (Number(n) === 3) {
        const types = [];

        for (let i =0; i < data.types.length; i++) {
            types.push(data.types[i].type.name);
        }
          return res.json({
            hint:3,
            value: types
             });
    }
      
       
        if (Number(n) === 4) {
        return res.json({
          hint: 4,
          height: data.height,
          weight: data.weight,
        });
      }
     
        if (Number(n) === 5) {
        return res.json({
          hint: 5,
          value: data.cries.latest,
        });
      }
       
    
    return res.status(400).json({
        error: "Hint does not exist",
      });

    })
    .catch(() => {
      res.status(500).json({
        error: "Failed to fetch Pokemon",
      });
    });
});
 
 

 app.get("/guess/:game_id/:guess", (req, res) => {
    const {game_id, guess} = req.params ;

    const pokemonID = Number (
        Buffer.from (game_id, "base64").toString()
    );
   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data.name);
    console.log(guess);  
  if (
    data.name.toLowerCase() ===
    guess.toLowerCase() 
  ) {
    return res.json({
        correct: true,
        pokemon: data.name, 

    });
}
    return res.json({
        correct: false,
    });

    
    
 })
 .catch(() => {
      res.status(500).json({
        error: "Failed to fetch Pokemon",


});

   });
 });




 app.listen(3000);

 
 