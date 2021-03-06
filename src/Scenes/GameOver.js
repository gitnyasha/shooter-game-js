import Phaser from "phaser";
import Button from "../Objects/Buttons";
import config from "../Config/config";
import { showForm } from "../API/Form";

export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: "GameOver" });
  }

  addText() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
      fontSize: 40,
      fontStyle: "bold",
      color: "#ffffff",
      align: "center",
    });
    this.title.setOrigin(0.5);

    this.title = this.add.text(
      this.game.config.width * 0.5,
      90,
      `SCORE: ${this.sys.game.globals.playerScore.getPlayerScore()}`,
      {
        fontSize: 30,
        fontStyle: "bold",
        color: "#ffffff",
        align: "center",
      }
    );
    this.title.setOrigin(0.5);
  }

  addRestartButton() {
    this.btnRestart = new Button(
      this,
      config.width / 2,
      config.height / 2 - 100,
      "blueButton1",
      "blueButton2",
      "Menu",
      "Menu"
    );
    this.btnRestart.y = 400;
  }

  addTweens() {
    this.tweens.add({
      targets: this.title,
      y: 200,
      duration: 3000,
      ease: "Power3",
    });
  }

  create() {
    this.addText();
    showForm.call(this, this);
    this.addTweens();
    this.addRestartButton();
  }
}
