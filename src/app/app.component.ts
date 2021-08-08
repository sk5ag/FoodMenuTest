import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCollectionComponent } from './items/add-collection/add-collection.component';
import { AddItemComponent } from './items/add-item/add-item.component';
import { AddOnComponent } from './items/add-on/add-on.component';
import { CartComponent } from './items/cart/cart.component';
import { ConfirmedOrdersComponent } from './order/confirmed-orders/confirmed-orders.component';
import { ItemOrderComponent } from './order/item-order/item-order.component';
import { UnConfirmedOrdersComponent } from './order/un-confirmed-orders/un-confirmed-orders.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodMenu-Layout';
  gridColumns= 3;

  constructor(
    private dialog: MatDialog

  ){}
  
  onCreateItem(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";    
    this.dialog.open(AddItemComponent, dialogConfig);
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


}
