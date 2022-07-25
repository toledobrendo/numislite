import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-coin-item',
  templateUrl: './coin-item.component.html',
  styleUrls: ['./coin-item.component.scss']
})
export class CoinItemComponent implements OnInit {

  @Input()
  coin:any;

  @Input()
  key:string;

  constructor() {
    this.key = "";
  }

  ngOnInit(): void {
  }

}
