import { Game as MainGame } from "./scenes/Game";
import { MainMenu } from "./scenes/MainMenu";
import Phaser from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
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
