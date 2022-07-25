import { Component, OnInit } from '@angular/core';
import {CoinService} from "../service/coin.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collection: any = [];
  loading: boolean;

  constructor(private coinService: CoinService,
              private titleService: Title) {
    this.titleService.setTitle("Collection : Numislite");
    this.loading = false;
  }

  ngOnInit(): void {
    this.search({});
  }

  search(data: any) {
    this.loading = true;
    this.coinService.getCollection(data)
      .subscribe((data: any) => {
        this.collection = data
        this.loading = false;
      });
  }
}
