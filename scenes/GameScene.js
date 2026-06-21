export default class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }

    create() {

        // 仮の文字
        this.add.text(
            500,
            300,
            "Game Scene",
            {
                fontSize: "48px",
                color: "#ffffff"
            }
        );

    }

}
