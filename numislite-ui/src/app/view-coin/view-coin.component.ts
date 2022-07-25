import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoinService} from "../service/coin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {AddCollectionDialogComponent} from "../add-collection-dialog/add-collection-dialog.component";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-coin',
  templateUrl: './view-coin.component.html',
  styleUrls: ['./view-coin.component.scss']
})
export class ViewCoinComponent implements OnInit {

  coin: any = {};
  features: any = [];
  measurements: any = [];
  issues: any = [];
  yearIssues: any = [];

  previousRouteLabel: string;

  constructor(private coinService: CoinService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private titleService: Title,
              private router: Router) {
    this.loadData();
    this.previousRouteLabel = "Home";
    if (this.router.url.match("wishlist")) {
      this.previousRouteLabel = "Wishlist";
    } else if (this.router.url.match("collection")) {
      this.previousRouteLabel = "Collection";
    } else if (this.router.url.match("search")) {
      this.previousRouteLabel = "Search";
    }
  }

  ngOnInit(): void {
  }

  loadData() {
    this.coin = {};
    this.features = [];
    this.measurements = [];
    this.issues = [];
    this.yearIssues = [];
    this.coinService.getCoin(1)
      .subscribe((data: any) => {
        this.coin = data;
        this.populateFeatures();
        this.titleService.setTitle(this.coin.title + " : Numislite");
      });

    this.coinService.getCoinIssues()
      .subscribe((data: any) => {
        this.issues = data;
        for (let i in this.issues) {
          this.yearIssues.push(this.issues[i].year);
        }
      });
  }

  concat(input: string[]) {
    return input.join(", ");
  }

  addToWishlist() {
    this.coinService.addToWishlist(this.coin.id)
      .subscribe(() => this.snackBar.open("Added " + this.coin.title + " to wishlist"));
  }

  openAddEditToCollection(update: boolean, issue: any) {
    let dialogRef = this.dialog.open(AddCollectionDialogComponent, {
      width: '700px',
      data: {coin: this.coin, issue: issue, yearIssues: this.yearIssues, update: update}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.coinService.saveIssueToCollection(result)
          .subscribe(() => {
            this.loadData();

            let action = update ? "Updated" : "Added";
            this.snackBar.open(action + " (" + result.year + ") " + this.coin.title + " to collection");
          });

      }
    })
  }

  populateFeatures() {
    this.addFeature("Status", this.coin.status);
    this.addFeature("Issuer", this.coin.issuer.name);
    this.addFeature("Period", this.coin.ruler.name);
    this.addFeature("Years", this.coin.minYear + " - " + this.coin.maxYear);
    this.addFeature("Type", this.coin.type);
    this.addFeature("Value", this.coin.value.text);
    this.addFeature("Currency", this.coin.value.currency.full_name);
    this.addFeature("Composition", this.coin.composition.text);
    this.addFeature("Shape", this.coin.shape);
    this.addFeature("Orientation", this.coin.orientation);
    this.addMeasurement("Weight", this.coin.externalMeasurement.weight, this.coin.localMeasurement.weight, "g");
    this.addMeasurement("Diameter", this.coin.externalMeasurement.size, this.coin.localMeasurement.size, "mm");
    this.addMeasurement("Thickness", this.coin.externalMeasurement.thickness, this.coin.localMeasurement.thickness, "mm");
  }

  addFeature(label: string, value: string) {
    if (value) {
      this.features.push({label: label, value: value});
    }
  }

  addMeasurement(label: string, numistaNum: number, localNum: number, unit: string) {
    if (numistaNum || localNum) {
      this.measurements.push({
        label: label,
        numistaNum: numistaNum,
        localNum: localNum,
        unit: unit
      });
    }
  }
}

