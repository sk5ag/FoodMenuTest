import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmed-orders',
  templateUrl: './confirmed-orders.component.html',
  styleUrls: ['./confirmed-orders.component.css']
})
export class ConfirmedOrdersComponent implements OnInit {

  constructor(
    public confirmedOrderDialogRef: MatDialogRef<ConfirmedOrdersComponent>,
    private dialog: MatDialog
  ) {}

  onClose() {
    this.confirmedOrderDialogRef.close();
  }

  ngOnInit(): void {
  }

}
