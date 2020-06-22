import Phaser from "phaser";

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    // add logo image
    this.add.image(400, 200, "logo");

    // display progress bar
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Loading...",
      style: {
        font: "20px monospace",
        fill: "#ffffff",
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: "",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on("progress", function (value) {
      percentText.setText(parseInt(value * 100) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on("fileprogress", function (file) {
      assetText.setText("Loading asset: " + file.key);
    });

    // remove progress bar when complete
    this.load.on(
      "complete",
      function () {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
        this.ready();
      }.bind(this)
    );
    this.load.image("space", "assets/background.jpeg");
    this.load.image("logo", "assets/doucetech_logo.png");
    this.load.image("button2", "assets/button2.png");
    this.load.image("square", "assets/background.jpeg");
    this.load.image("button", "assets/button.png");
    this.load.image("back", "assets/preview2.png");
    this.load.image("check", "assets/check.png");
    this.load.image("no-check", "assets/no-check.png");
    this.load.audio("audio", "assets/theme.mp3");
    this.load.image("road", "assets/background.jpeg");
    this.load.image("blueButton1", "assets/ui/blue_button02.png");
    this.load.image("blueButton2", "assets/ui/blue_button03.png");
    this.load.image("phaserLogo", "assets/logo.png");
    this.load.image("box", "assets/ui/grey_box.png");
    this.load.image("checkedBox", "assets/ui/blue_boxCheckmark.png");

    this.load.spritesheet("enemy2", "assets/sprEnemy1.png", {
      frameWidth: 57,
      frameHeight: 68,
    });

    this.load.spritesheet("player", "assets/DragonAttack.png", {
      frameHeight: 25,
      frameWidth: 25,
    });
    this.load.spritesheet("explosion", "assets/explosionB.png", {
      frameWidth: 50,
      frameHeight: 50,
    });
    this.load.image("laser-player", "assets/bullet.png");
    this.load.image("bullet", "assets/bullet.png");

    this.load.audio("laser", "assets/flame.ogg");
    this.load.audio("explode", "assets/explode.wav");
    this.load.audio("explode2", "assets/explode2.wav");
  }

  ready() {
    this.scene.start("Menu");
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start("Menu");
    }
  }
}
