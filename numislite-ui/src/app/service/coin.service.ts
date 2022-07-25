import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {delay} from "rxjs";
import {Config} from "../shared/constants/config";

@Injectable()
export class CoinService {

  constructor(private http: HttpClient,
              private config: Config) { }

  getWishlist(searchObj: any) {
      return this.http.get('../assets/sample-data/wishlist.json');
  }

  getCoin(id: number) {
    return this.http.get(this.config.apiBaseUrl + '/coin/' + id);
  }

  getCoinIssues() {
    return this.http.get('../assets/sample-data/coin-issue.json');
  }

  addToWishlist(coinId: any) {
    // TODO: Use POST
    return this.http.get('../assets/sample-data/coin-issue.json');
  }

  saveIssueToCollection(issue: any) {
    // TODO: Use POST
    return this.http.get('../assets/sample-data/coin-issue.json');
  }

  getCollection(searchObj: any) {
    return this.http.get('../assets/sample-data/collection.json');
  }

  searchCoins(searchObj: any) {
    return this.http.get('../assets/sample-data/wishlist.json');
  }

}
