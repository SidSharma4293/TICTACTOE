import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() name:string = "";
  @Input() choice:string = "";
  @Input() noOfTimesWon: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
