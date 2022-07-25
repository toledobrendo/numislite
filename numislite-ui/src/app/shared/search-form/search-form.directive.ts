import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.directive.html',
  styleUrls: ['./search-form.directive.scss']
})
export class SearchFormDirective implements OnInit{

  @Input()
  loading: boolean = false;
  @Input()
  cacheKey: string = "";
  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter<any>();
  searchObj: any;

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    console.log("this.cacheKey = " + this.cacheKey);
    if (this.cacheKey != "") {
      let cache = this.cookieService.get(this.cacheKey);
      if (cache) {
        this.searchObj = JSON.parse(cache);
        console.log("retrieve cache: ");
        console.log(JSON.stringify(this.searchObj));
      } else {
        this.searchObj = {};
      }
    } else {
      this.searchObj = {};
    }
  }

  search() {
    console.log("this.cacheKey = " + this.cacheKey);
    if (this.cacheKey != "") {
      console.log("saving cache: ");
      console.log(this.searchObj);
      this.cookieService.put(this.cacheKey, JSON.stringify(this.searchObj));
    }
    this.onSubmit.emit(this.searchObj);
  }

  clear() {
    this.searchObj = {};
  }

}
