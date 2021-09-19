import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button [disabled] = "showBox" nbButton *ngIf = "!value">{{value}}</button>
  <button [disabled] = "showBox" nbButton hero status = "success" *ngIf = "value == 'X'">{{value}}</button>
  <button [disabled] = "showBox" nbButton hero status = "info" *ngIf = "value == 'O'">{{value}}</button>
  `,
  styleUrls: [
    './square.component.scss'
  ]
})
export class SquareComponent {
  
  @Input()
  value: 'X' | 'O' = "X";

  @Input() showBox : boolean = false;
}
