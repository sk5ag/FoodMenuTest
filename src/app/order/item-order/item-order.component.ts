import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.css']
})
export class ItemOrderComponent implements OnInit {

  constructor(
    public itemOrderDialogRef: MatDialogRef<ItemOrderComponent>,
    private dialog: MatDialog
  ) { }

  onClose() {
    this.itemOrderDialogRef.close();
  }
  ngOnInit(): void {
  }
  

}
