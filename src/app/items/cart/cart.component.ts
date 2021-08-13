import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CheckOutComponent } from '../check-out/check-out.component';

interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  displayedColumns: string[] = ['image', 'blank', 'item', 'cost', 'action'];

  discountAmount = 5;
  afterDiscount = 0;
  transactions: Transaction[] = [
    {item: 'Beach ball  Beach ball Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  constructor(
    public cartDialogRef: MatDialogRef<CartComponent>,
    private dialog: MatDialog,
    public checkOutDialogRef: MatDialogRef<CheckOutComponent>
  ){}


  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value, afterDiscount) => acc + value, 0);
  }

  onClose() {
    this.cartDialogRef.close();
  }

  onCheckOut(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";    
    this.dialog.open(CheckOutComponent, dialogConfig);
  }

}
