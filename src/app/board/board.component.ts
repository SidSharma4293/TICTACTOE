import { AfterViewChecked, Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares!: any[];
  xIsNext!: boolean;
  winner!: string;
  gameOn: boolean = false;
  XPlayer: string = "";
  OPlayer: string = "";
  showBoard: boolean = false;
  newGameEnabled: boolean = false;
  startEnabled : boolean = true;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
    this.showBoard = false;
    this.newGameEnabled = false;
    this.startEnabled = true;
    this.XPlayer = "";
    this.OPlayer = "";
  }

  start() {
    this.showBoard = true;
    this.startEnabled = false;
    this.gameOn = true;
    this.newGameEnabled = true;
  }

  get player() {
    return this.turn == 'X' ? this.XPlayer : this.OPlayer;
  }

  get winnerName() {
    return this.winner == 'X' ? this.XPlayer : this.OPlayer;
  }
  
  get turn() {
    return this.xIsNext ? 'X':'O'
  }

  makeMove(idx: number) {
    if(!this.squares[idx]) {
      this.squares.splice(idx,1,this.turn);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();

    if(!!this.winner)
    {
    this.newGameEnabled = true;
    this.startEnabled = false;
    this.gameOn = false;
    
    setTimeout(()=>{alert(this.winnerName+" won!")},300);
    }
  }

  restart() {
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
    this.showBoard = false;
    this.newGameEnabled = false;
    this.startEnabled = true;
    this.XPlayer = "";
    this.OPlayer = "";
  }

  calculateWinner() {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i< lines.length;i++) {
      const [a,b,c] = lines[i];
      if(
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c] 
      )
      {
        return this.squares[a];
      }
    }
    return null;
  }
}
