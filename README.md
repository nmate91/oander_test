# oander Key-Value store application

## Versions used

-   NodeJS version 16.13.2
-   Docker version 20.10.12

## Running in local environment (only tests)

1. Install dependencies with `npm i`
2. Run `npm run test-coverage` for tests with coverage and `npm run test-watch` for watching tests

## Running with docker

1. Run `docker-compose up -d`

## Usage

-   `GET /key-value-store/:key`: Returns the JSON stored under `key`, if it exists. If it does not exists, returns `404`
-   `POST /key-value-store/:key`: Creates a JSON under `key` if it does not exists. Updates it, if it does. Sends `201` back to the client.
-   `DELETE /key-value-store/:key`: Deletes a key and the value from redis and sends `201`. If it does not exists, returns `204`

## Tracking:

1. Monday `2h`
2. Wednesday `7h`
