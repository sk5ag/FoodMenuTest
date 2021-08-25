import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-unconfirmed-order-items',
  templateUrl: './unconfirmed-order-items.component.html',
  styleUrls: ['./unconfirmed-order-items.component.css']
})
export class UnconfirmedOrderItemsComponent {

  displayedColumns: string[] = ['image', 'blank', 'item', 'cost', 'action'];
  transactions: Transaction[] = [
    {item: 'Beach ball  Beach ball Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  constructor(
    public unconfirmedOrderDialogRef: MatDialogRef<UnconfirmedOrderItemsComponent>,
    private dialog: MatDialog,
  ) { }

    /** Gets the total cost of all transactions. */
    getTotalCost() {
      return this.transactions.map(t => t.cost).reduce((acc, value, afterDiscount) => acc + value, 0);
    }

  onClose() {
    this.unconfirmedOrderDialogRef.close();
  }

  onConfirmOrder(){

  }

}
