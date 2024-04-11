## Scoreboard API Service ##

This module is responsible for managing the scores of users in a game. It provides an API for creating, updating, and retrieving user scores. The scores are stored in a MongoDB database.

## API Endpoints ##

- POST /scores: Create a new score for a user.
- GET /scores: Retrieve the top 10 scores.
- PUT /scores/:id: Update a user's score.

## Flow of Execution ##

1. A user completes an action on the website.
2. The website makes an API call to POST /scores or PUT /scores/:id to update the user's score.
3. The server updates the score in the database.
4. The server sends a message to all connected clients with the updated top 10 scores.
5. The clients update their scoreboards with the new scores.

## Diagram ##

![diagram](https://github.com/thanhlocdev-01/backend-code-challenge-LamThanhLoc/assets/88845761/121268df-f303-4b5a-9c85-4d07a495eb1b)

## Security ##

To prevent unauthorized score updates, we use a token-based authentication system. When a user logs in, they are issued a token. This token must be included in the Authorization header of all API requests.

## Improvements ##

- We could add rate limiting to prevent a user from making too many requests in a short period of time.
- We could add more detailed logging and error handling.
- We could add automated tests to ensure the API behaves as expected.

# Task for Backend Engineering Team #

1. Implement the API endpoints as described above.
2. Implement the token-based authentication system.
3. Implement the live update of the scoreboard using WebSockets or a similar technology.
4. Implement the improvements suggested above.

