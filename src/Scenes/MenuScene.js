import Phaser from "phaser";
import config from "../Config/config";
import Button from "../Objects/Buttons";
import { getByClass } from "../UI/DOM";
import { hideForm } from "../API/Form";

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  getLeaderBoard() {
    this.sys.game.globals.playerScore.getScores();
    this.sys.game.globals.playerScore.showLeaderBoard();
  }

  hideLeaderBoard() {
    if (getByClass(".leader-board")) {
      getByClass(".leader-board").classList.remove("show");
    }
  }

  preload() {
    hideForm();
    this.getLeaderBoard();
    this.hideLeaderBoard();
  }

  addButtons() {
    this.gameButton = new Button(
      this,
      config.width / 2,
      config.height / 2 - 100,
      "blueButton1",
      "blueButton2",
      "Play",
      "Game"
    );

    // Options
    this.optionsButton = new Button(
      this,
      config.width / 2,
      config.height / 2,
      "blueButton1",
      "blueButton2",
      "Options",
      "Options"
    );

    // Credits
    this.creditsButton = new Button(
      this,
      config.width / 2,
      config.height / 2 + 100,
      "blueButton1",
      "blueButton2",
      "Credits",
      "Credits"
    );

    // Credits
    this.scoreButton = new Button(
      this,
      config.width / 2,
      config.height / 2 + 100,
      "blueButton1",
      "blueButton2",
      "LeaderBoard",
      "LeaderBoard"
    );
  }

  create() {
    this.addButtons();
    this.model = this.sys.game.globals.model;

    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add("audio", { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}
