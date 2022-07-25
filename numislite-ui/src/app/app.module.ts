import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatGridListModule} from "@angular/material/grid-list";
import {OverlayModule} from "@angular/cdk/overlay";
import { AddWishlistComponent } from './add-wishlist/add-wishlist.component';
import {CoinService} from "./service/coin.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import { WishlistComponent } from './wishlist/wishlist.component';
import { ViewCoinComponent } from './view-coin/view-coin.component';
import {MatTableModule} from "@angular/material/table";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import { AddCollectionDialogComponent } from './add-collection-dialog/add-collection-dialog.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import { AutofocusDirective } from './shared/autofocus/autofocus.directive';
import {FormsModule} from "@angular/forms";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import { CollectionComponent } from './collection/collection.component';
import { SearchFormDirective } from './shared/search-form/search-form.directive';
import { CoinItemComponent } from './shared/coin-item/coin-item.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CookieModule, CookieService} from "ngx-cookie";
import { SearchComponent } from './search/search.component';
import {Config} from "./shared/constants/config";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddWishlistComponent,
    WishlistComponent,
    ViewCoinComponent,
    AddCollectionDialogComponent,
    AutofocusDirective,
    CollectionComponent,
    SearchFormDirective,
    CoinItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    OverlayModule,
    MatTooltipModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatProgressSpinnerModule,
    CookieModule.withOptions()
  ],
  providers: [
    CoinService,
    CookieService,
    Config,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {hasBackdrop: true}},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
