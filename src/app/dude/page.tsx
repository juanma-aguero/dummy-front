"use client";
import { IRefPhaserGame, PhaserGame } from "../../game/PhaserGame";
import { useRef, useState } from "react";
import Phaser from "phaser";
import Link from "next/link";

export default function Home() {
  const phaserRef = useRef<IRefPhaserGame | null>(null);
  const [canMoveSprite, setCanMoveSprite] = useState(true);

  const currentScene = (scene: Phaser.Scene) => {
    setCanMoveSprite(scene.scene.key !== "MainMenu");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-8">Dude</h1>
        <div className="flex flex-col items-center">
          <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
        </div>
      </div>
      <Link href="/">{" <- "}Back to home</Link>
    </main>
  );
}
