import Phaser from "phaser";
import Button from "../Objects/Buttons";
import { getByClass } from "../UI/DOM";

export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super("LeaderBoard");
  }

  addText() {
    this.title = this.add.text(
      this.game.config.width * 0.5,
      110,
      "LEADER BOARD",
      {
        fontSize: 48,
        fontStyle: "bold",
        color: "#ffffff",
        align: "center",
      }
    );
    this.title.setOrigin(0.5);
  }

  updateLeaderBoard() {
    const data = this.sys.game.globals.playerScore.showLeaderBoard();
    if (getByClass(".leader-board")) {
      getByClass(".leader-board").remove();
    }
    document.body.insertAdjacentElement("beforebegin", data);
    getByClass(".leader-board").classList.add("show");
  }

  createContainer() {
    this.model = this.sys.game.globals.model;
    const w = this.sys.game.config.width / 2;
    const h = this.sys.game.config.height / 2;
    const square = this.add.image(w, h, "square");
    const container = this.add.container(0, -20);
    container.height = 200;
    container.add([square, this.title]);
  }

  create() {
    this.addText();
    this.updateLeaderBoard();
    this.createContainer();
    this.menuButton = new Button(
      this,
      500,
      530,
      "blueButton1",
      "blueButton2",
      "Menu",
      "Menu"
    );
  }
}
