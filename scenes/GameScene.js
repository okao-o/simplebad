export default class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }

    create() {

        // 地面の位置
        const groundY = 650;

        // 地面を長方形で描画
        // x, y, 幅, 高さ, 色
        this.add.rectangle(
            640,
            groundY,
            1280,
            140,
            0x228B22
        );

        // 仮の文字
        this.add.text(
            500,
            100,
            "Game Scene",
            {
                fontSize: "48px",
                color: "#ffffff"
            }
        );

    }

}
