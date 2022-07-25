import { Component, OnInit } from '@angular/core';
import {CoinService} from "../service/coin.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  coins: any;

  constructor(private coinService: CoinService,
              private titleService: Title) {
    this.titleService.setTitle("Search : Numislite");
    this.search({});
  }

  ngOnInit(): void {
  }

  search(data: any) {
    this.coinService.getWishlist(data)
      .subscribe((data: any) => this.coins = data);
  }

}
