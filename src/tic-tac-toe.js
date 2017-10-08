class TicTacToe {
    constructor() {
		this.playingField=[[null, null, null],
						  [null, null, null],
						  [null, null, null],];
						
		this.winner = null;
		this.x = 'x';
		this.o = 'o';
		this.currentPlayerSymbol = this.x;
    }

    getCurrentPlayerSymbol() {
		return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
		if(this.playingField[rowIndex][columnIndex] === null){
			this.playingField[rowIndex][columnIndex] = this.currentPlayerSymbol;
			this.currentPlayerSymbol = this.currentPlayerSymbol === this.x ? this.o : this.x; 
		};
    }

    isFinished() {	
		return (this.getWinner() !== null) || this.noMoreTurns();
    }
	
	checkRows(arr){
		let isFin;
		for(let i = 0; i < arr.length; i++){
			let inter = arr[i][0];
			isFin = true;
			
			for(let j = 1; j < arr[i].length; j++){
				if(arr[i][j] !== inter){
					isFin = false;
					break;
				}
			}
			if(isFin === true){
				this.winner = inter;
				return true;
			}
		}
		return false;
	}
	
	checkColumn(arr){
		let isFin;
		for(let j=0; j<arr.length; j++){
			let inter=arr[0][j];
			isFin=true;
			
			for(let i=1; i<arr[j].length; i++){
				if(arr[i][j] !== inter){
					isFin=false;
					break;
				}
			}
			if (isFin===true){
				this.winner=inter;
				return true;
			}
		}
		return false;
	}
	
	checkDiag(arr){
		let isFin = true;
		let inter = arr[0][0];
		for(let x = 1, y = 1; x < arr.length; x++, y++){
			if(arr[x][y] !== inter){
				isFin = false;
				break;
			}
		}
		
		if(isFin === true){
			this.winner = inter;
			return true;
		}
		else isFin = true;
		
		inter = arr[0][2];
		for(let x = 1, y = 1; x < arr.length; x++, y--){
			if(arr[x][y] !== inter){
				isFin = false;
				break;
			}
				
		}
		
		if(isFin === true){
			this.winner = inter;
		};
		
		return isFin;
	}

    getWinner() {
		this.checkRows(this.playingField);
		this.checkColumn(this.playingField);
		this.checkDiag(this.playingField);
		
		return this.winner;
    }

    noMoreTurns() {
		return !(this.playingField.some(x => {
			for(let i in x){
				if(x[i] === null){
					return true;
				}
			}
			return false;
		}));
    }

    isDraw() {
		return this.noMoreTurns() && (this.getWinner() === null);
    }

    getFieldValue(rowIndex, colIndex) {
		return this.playingField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
