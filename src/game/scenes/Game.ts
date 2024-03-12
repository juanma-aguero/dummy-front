import { EventBus } from "../EventBus";
import { Scene } from "phaser";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  gameText: Phaser.GameObjects.Text;

  platforms;
  player;
  cursors;

  constructor() {
    super("Game");
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x00ff00);

    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(200, 500, "ground").setScale(2).refreshBody();
    this.platforms.create(250, 250, "ground");
    this.platforms.create(50, 350, "ground");
    this.platforms.create(750, 430, "ground");

    this.player = this.physics.add.sprite(100, 450, "dude");
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(300);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.player, this.platforms);

    EventBus.emit("current-scene-ready", this);
  }

  preload() {
    //  Load the assets for the game - Replace with your own assets
    this.load.setPath("game");

    this.load.image("ground", "ground.png");
    this.load.spritesheet("dude", "dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  update(time: number, delta: number): void {
    if (this.cursors.left.isDown) {
      console.log("left");
      this.player.setVelocityX(-160);

      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      console.log("right");
      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("turn");
    }

    if (this.cursors.up.isDown) {
      console.log("up");
      this.player.setVelocityY(-330);
    }
  }

  changeScene() {
    this.scene.start("GameOver");
  }
}
