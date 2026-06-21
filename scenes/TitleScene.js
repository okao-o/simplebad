export default class TitleScene extends Phaser.Scene {

    constructor() {
        super("TitleScene");
    }

    create() {

        // タイトル文字
        this.add.text(
            450,
            300,
            "Simple Badminton",
            {
                fontSize: "48px",
                color: "#ffffff"
            }
        );

    }

}
