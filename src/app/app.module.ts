import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './material/app-material/app-material.module';
import { SponserComponentComponent } from './sponser/sponser-component/sponser-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './categories/category/category.component';
import { HeaderComponent } from './headerfooter/header/header.component';
import { FooterComponent } from './headerfooter/footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './items/list/list.component';
import { AddItemComponent } from './items/add-item/add-item.component';
import { AddCollectionComponent } from './items/add-collection/add-collection.component';
import { ItemOrderComponent } from './order/item-order/item-order.component';
import { UnConfirmedOrdersComponent } from './order/un-confirmed-orders/un-confirmed-orders.component';
import { ConfirmedOrdersComponent } from './order/confirmed-orders/confirmed-orders.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { ItemComponent } from './items/item/item.component';
import { ImageUploadComponent } from './upload/image-upload/image-upload.component';
import { CartComponent } from './items/cart/cart.component';
import { UserPreferencesService } from './shared/user-preferences.service';
import { AddOnComponent } from './items/add-on/add-on.component';
import { CheckOutComponent } from './items/check-out/check-out.component';
import { CartSnakbarComponent } from './items/list/cart-snakbar/cart-snakbar.component';
import { FavSnakbarComponent } from './items/list/fav-snakbar/fav-snakbar.component';
import { HostsConfirmedOrdersComponent } from './order/hosts/hosts-confirmed-orders/hosts-confirmed-orders.component';
import { HostsInprogressOrdersComponent } from './order/hosts/hosts-inprogress-orders/hosts-inprogress-orders.component';
import { HostsDispatchedOrdersComponent } from './order/hosts/hosts-dispatched-orders/hosts-dispatched-orders.component';
import { HostsFulfillmentOrdersComponent } from './order/hosts/hosts-fulfillment-orders/hosts-fulfillment-orders.component';
import { HostsFulfilledOrdersComponent } from './order/hosts/hosts-fulfilled-orders/hosts-fulfilled-orders.component';
import { UnconfirmedOrderItemsComponent } from './order/un-confirmed-orders/unconfirmed-order-items/unconfirmed-order-items.component';
import { CaptainOpenTableComponent } from './order/captain/captain-open-table/captain-open-table.component';
import { CaptainViewTableComponent } from './order/captain/captain-view-table/captain-view-table.component';
import { CaptainCloseTableComponent } from './order/captain/captain-close-table/captain-close-table.component';
import { LanguageComponent } from './localization/language/language.component';
import { LocationComponent } from './localization/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    SponserComponentComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    ListComponent,
    AddItemComponent,
    AddCollectionComponent,
    ItemOrderComponent,
    UnConfirmedOrdersComponent,
    ConfirmedOrdersComponent,
    ItemComponent,
    ImageUploadComponent,
    CartComponent,
    AddOnComponent,
    CheckOutComponent,
    CartSnakbarComponent,
    CartSnakbarComponent,
    FavSnakbarComponent,
    HostsConfirmedOrdersComponent,
    HostsInprogressOrdersComponent,
    HostsDispatchedOrdersComponent,
    HostsFulfillmentOrdersComponent,
    HostsFulfilledOrdersComponent,
    UnconfirmedOrderItemsComponent,
    CaptainOpenTableComponent,
    CaptainViewTableComponent,
    CaptainCloseTableComponent,
    LanguageComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    NgbModule,
    MatPaginatorModule
  ],
  providers: [UserPreferencesService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddItemComponent, 
    ConfirmedOrdersComponent, 
    AddCollectionComponent, 
    ItemOrderComponent, 
    UnConfirmedOrdersComponent,
    ImageUploadComponent,
    CartComponent,
    CheckOutComponent,
    AddOnComponent,
    CartSnakbarComponent,
    FavSnakbarComponent,
    UnconfirmedOrderItemsComponent,
    LanguageComponent,
    LocationComponent
  ]
})
export class AppModule { }
