import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCollectionComponent } from './items/add-collection/add-collection.component';
import { AddItemComponent } from './items/add-item/add-item.component';
import { AddOnComponent } from './items/add-on/add-on.component';
import { CartComponent } from './items/cart/cart.component';
import { LanguageComponent } from './localization/language/language.component';
import { CaptainCloseTableComponent } from './order/captain/captain-close-table/captain-close-table.component';
import { CaptainOpenTableComponent } from './order/captain/captain-open-table/captain-open-table.component';
import { CaptainViewTableComponent } from './order/captain/captain-view-table/captain-view-table.component';
import { ConfirmedOrdersComponent } from './order/confirmed-orders/confirmed-orders.component';
import { ItemOrderComponent } from './order/item-order/item-order.component';
import { UnConfirmedOrdersComponent } from './order/un-confirmed-orders/un-confirmed-orders.component';
import { UserPreferencesService } from 'src/app/shared/user-preferences.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FoodMenu-Layout';
  gridColumns= 3;

  constructor(
    private dialog: MatDialog,
    private _userPreferencesService: UserPreferencesService

  ){}

  ngOnInit(){

    if (!localStorage.getItem('myLang') || !localStorage.getItem('myLocation')){
      this.openLanguageScreen()
    }else {
      this._userPreferencesService.languagePreference = localStorage.getItem('myLang')
    }
  }
  
  onCreateItem(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";    
    this.dialog.open(AddItemComponent, dialogConfig);
  }

  onOpenTable(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";    
    this.dialog.open(CaptainOpenTableComponent, dialogConfig);
  }

  onCloseTable(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";    
    this.dialog.open(CaptainCloseTableComponent, dialogConfig);
  }

  onViewTable(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";    
    this.dialog.open(CaptainViewTableComponent, dialogConfig);
  }

  onCreateCollection(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";    
    this.dialog.open(AddCollectionComponent, dialogConfig);
  }

  openCart(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";    
    this.dialog.open(CartComponent, dialogConfig);
  }

  openUnconfirmedOrders(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";    
    this.dialog.open(UnConfirmedOrdersComponent, dialogConfig);
  }

  openConfirmedOrders(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";    
    this.dialog.open(ConfirmedOrdersComponent, dialogConfig);
  }

  openItemOrder(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";    
    this.dialog.open(ItemOrderComponent, dialogConfig);
  }

  openLanguageScreen(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "auto";
    dialogConfig.height = "auto";    
    this.dialog.open(LanguageComponent, dialogConfig);
  }

}
