const readline = require('readline-sync');
class TTT {
    constructor() {
        this.isEmpty = "true";
        this.player = 0;
        this.board = [[]];
    }

    hostplay() {
        this.initboard();
        while (this.isEmpty == "true") {
            console.log("Player turn");
            this.putVal();
            this.displayboard();
            if (this.win()) {
                console.log("Yay Player Won");
                break;
            }
            this.player = 1;
            console.log("Computer turn");
            this.putVal();
            this.displayboard();
            if (this.win()) {
                console.log("Yay Computer Won");
                break;
            }
            this.player = 0;
        }
        console.log("Draw Match");
    }



    initboard() {

        // Loop to create 2D array using 1D array
        for (let i = 0; i < 3; i++) {
            this.board[i] = [[]];

        }

        // Loop to initilize 2D array elements.
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.board[i][j] = -10;

            }
        }
        this.displayboard();
    }



    displayboard() {
        let count = 0;
        for (let i = 0; i < this.board.length; i++) {

            console.log("---------------");
            console.log("||");
            for (let j = 0; j < this.board.length; j++) {
                if (this.board[i][j] == 0) {
                    count++;
                    console.log(" O |");
                }
                else if (this.board[i][j] == 1) {
                    count++;
                    console.log(" X |");
                }
                else {
                    console.log(" |");
                }
            }
        }
        if (count == 9) {
            this.isempty = "false";
        }
        console.log("---------------");
    }



    putVal() {
        // to give the index values so as to mark the the value accordingly and display it by the displayboard func;
        let i;
        let j;
        if (this.player % 2 == 1) {
            i = parseInt((Math.random() * 10) % 3);
            j = parseInt((Math.random() * 10) % 3);
            console.log(i + " " + j);
        }
        else {

            i = readline.questionInt();
            j = readline.questionInt();
        }
        //checking if the board index is empty for the player or the computer to place the value
        if (this.board[i][j] == -10) {
            if (this.player % 2 == 0) {
                this.board[i][j] = 0;
            }
            else if (this.player % 2 == 1) {
                this.board[i][j] = 1;
                console.log("Computer Chooses " + i + " " + j);
            }
        }

        else {
            this.putVal();
        }
    }




    win() {
        return ((this.board[0][0] + this.board[0][1] + this.board[0][2] == this.player * 3)
            || (this.board[1][0] + this.board[1][1] + this.board[1][2] == this.player * 3)
            || (this.board[2][0] + this.board[2][1] + this.board[2][2] == this.player * 3)
            || (this.board[0][0] + this.board[1][0] + this.board[2][0] == this.player * 3)
            || (this.board[0][1] + this.board[1][1] + this.board[2][1] == this.player * 3)
            || (this.board[0][2] + this.board[1][2] + this.board[2][2] == this.player * 3)
            || (this.board[0][0] + this.board[1][1] + this.board[2][2] == this.player * 3)
            || (this.board[2][0] + this.board[1][1] + this.board[0][2] == this.player * 3));
    }
}





module.exports = {
    TTT //exporting the class it to the main

}