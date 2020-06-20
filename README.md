# Hunting Dragons

> Get to kill some dragons for a boundy hunter.

<!-- <p align="center">
    <img src="image.png">
</p> -->

This project consisted on building a video game using JavaScript and the game Engine [Phaser](https://phaser.io/).

## Content

- [Built with](#built-with)
- [Live Demo](#live-demo)
- [GDD](#gdd)
- [Getting Started](#getting-started)
- [Authors](#authors)
- [Contributing](#contributing)
- [Show your support](#show-your-support)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Built With

- JavaScript
- HTML
- [Phaser](https://phaser.io/)
- [webpack](https://webpack.js.org/)

## Live Demo

[]()

## GDD

### Topic

A hunter killing dragons for a reward.

### Objetive of the game

To kill as many dragons as you can before they destroy the livestock in the village and earn a reward.

### Mechanics

1. Mobility: the hunter has the ability to move in any direction with help of keys on the keyboard.
2. Shoot: the hunter will be shooting arrows from a crossbow.
3. Scoring System: get 1 point for each dragon they kill.

### Entities

- player: hunter
- enemies: dragons
- platform: open road
- levels: 1

### User interactions

Movement keys

- A left
- D right
- W up
- S down

Shooting arrows key

- spacebar

### Screens

1. Boot: shows the name game
2. Prealoader: loads assets and gets current user score if exist
3. Authentication: if there is not a user saved on local storage, asks player name
4. Title: gives options to start, configure, see controls or get leader board game
5. Options: configures sound
6. Controls: shows controls
7. Leader Board: shows leaders scores' game
8. Game: plays the game
9. Game Over: shows player's current and maximum scores, asks to go to the menu

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure you have installed [Node JS](https://nodejs.org/en/). If not, follow this [guide](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/) for Linux or this [one](https://treehouse.github.io/installation-guides/mac/node-mac.html) for Mac OS.

### Setup

Download the project

    $ git clone https://github.com/gitnyasha/shooter-game-js.git

Install the dependencies

    $ npm install

### Install

If you want to modify the code and see the changes on live go the project's root directory and run webpack-dev-server with the next command:

    $ npm run dev

or you can run the http-server for production enviroment:

    $ npx webpack --config webpack.prod.js

    $ npm run start

### Usage

Open the next link [http://localhost:8080/](http://localhost:8080/) and enter a player name. Happy playing!!!

### Run tests

Only run the next comman inside the project's root directory:

    $ npm run test

### Deployment

To deploy this project on heroku run the next commands:

    $ heroku create

if you are on `master` branch:

    $ git push heroku master

or if you are in `another-branch`:

    $ git push heroku another-branch:master

## Authors

👤 **Ivan Ulises Guzman Sanchez**

- Github: [gitnyasha](https://github.com/gitnyasha)
- Twitter: [@marshallchikari](https://twitter.com/marshallchikari)
- Linkedin: [marshall chikari](https://www.linkedin.com/in/marshall-chikari)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/gitnyasha/shooter-game-js/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

inputText Phaser library

- [rexrainbow](https://rexrainbow.github.io/phaser3-rex-notes/)

Sounds

- [PlayOnLoop](https://opengameart.org/users/playonloop)
- [Deva](https://opengameart.org/users/deva)

Images

- [AntumDeluge](https://opengameart.org/users/antumdeluge)
- [Eslchr](https://opengameart.org/users/eslchr)
- [Msavioti](https://opengameart.org/users/msavioti)
- [Kelvin Shadewing](https://opengameart.org/users/kelvin-shadewing)
- [ramses2099](https://opengameart.org/users/ramses2099)

## License

This project is [MIT](LICENSE) licensed.
