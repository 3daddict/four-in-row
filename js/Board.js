class Board {
    constructor(){
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();

    }

    createSpaces() {
        const spaces = [];

        for(let x in this.columns) {
            const column = [];

            for(let y in this.rows) {
                const space = new Space(x, y);
                column.push(space);
            }
            spaces.push(column);
        }
        return spaces;
    }

    drawHTMLBoard(){
        for(let column of this.spaces){
            for(let space of column){
                space.drawSVGSpace();
            }
        }
    }
}