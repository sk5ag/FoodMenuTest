import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(
    public itemDialogRef: MatDialogRef<ItemComponent>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  
  onClose() {
    this.itemDialogRef.close();
  }

}
