import { Component, OnInit } from '@angular/core';
import {Overlay, OverlayRef} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {AddWishlistComponent} from "../add-wishlist/add-wishlist.component";
import {CoinService} from "../service/coin.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  coins: any;

  constructor(private overlay: Overlay,
              private coinService: CoinService,
              private titleService: Title) {
    this.titleService.setTitle("Wishlist : Numislite");

    this.search({});
  }

  ngOnInit(): void {
  }

  search(data: any) {
    this.coinService.searchCoins(data)
      .subscribe((data: any) => this.coins = data);
  }
}
