import { Game as MainGame } from "./scenes/Game";
import {Types, AUTO} from "phaser";

const config: Types.Core.GameConfig = {
  type: AUTO,
  width: 700,
  height: 500,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300, x: 0 },
      debug: false,
    },
  },
  parent: "game-container",
  backgroundColor: "#028af8",
  scene: [MainGame],
};

const StartGame = (parent: string) => {
  return new Phaser.Game({ ...config, parent: parent });
};

export default StartGame;
