import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WishlistComponent} from "./wishlist/wishlist.component";
import {ViewCoinComponent} from "./view-coin/view-coin.component";
import {CollectionComponent} from "./collection/collection.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'wishlist/view', component: ViewCoinComponent},
  {path: 'collection', component: CollectionComponent},
  {path: 'collection/view', component: ViewCoinComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/view', component: ViewCoinComponent},
  {path: 'view', component: ViewCoinComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
