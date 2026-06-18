## Who-s-that-Pok-mon
# Project Overview

In this project, we built a simple Pokémon guessing game using Express.js and the PokéAPI. The API starts a new game, provides hints about a randomly selected Pokémon, and allows players to make guesses until they find the correct Pokémon.

## Creating the Server

We started by importing Express and creating an Express application. We also used express.json() middleware so our server can work with JSON data.

## Home Route

We created a home route that returns a simple message. This helps us verify that the server is running correctly.

## Starting a New Game

We created the /new route to start a new game. First, we generate a random Pokémon ID between 1 and 1025. Then we convert that ID into a Base64 string and use it as a game ID. This prevents players from seeing the actual Pokémon ID.

After generating the game ID, we return the game ID along with the number of available hints.

## Hint Route

We created the /hint/:game_id/:n route to provide hints. We first read the game ID and hint number from the URL. Then we decode the game ID back into the original Pokémon ID and use Fetch to get Pokémon information from the PokéAPI.

# Hint 1

We return the Pokémon's first listed move.

# Hint 2

We return the Pokémon's second listed move.

# Hint 3

We return the Pokémon's type or types.

# Hint 4

We return the Pokémon's height and weight.

# Hint 5

We return a link to the Pokémon's cry audio.

## Error Handling

We return an error message if the hint number does not exist. We also handle errors that may occur while fetching data from the PokéAPI.

## Guess Route

We created the /guess/:game_id/:guess route so players can submit a guess. We compare the player's guess with the actual Pokémon name and return whether the guess is correct or incorrect.

## Starting the Server

Finally, we use app.listen(3000) to start the server and allow users to access the API.

## What We Learned

Through this project, we learned how to create Express routes, use route parameters, fetch data from an external API, work with JSON responses, handle errors, and build a simple backend game.

## AI Disclosure

While working on this project, we primarily used class materials, lecture examples, and W3Schools to learn and review concepts related to Express, JavaScript, route handling, and API requests.
We also used ChatGPT occasionally to clarify concepts and help troubleshoot a few issues while developing `index.js`. All code included in the final project was reviewed, tested, and understood by both team members before submission.

# Created By

    Nusrat Jerin & MST Khatun