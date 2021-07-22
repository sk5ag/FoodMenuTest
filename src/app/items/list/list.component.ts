import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ItemComponent } from '../item/item.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  gridColumns = 3;
  durationInSeconds = 5;

  constructor(
    public listItemDialogRef: MatDialogRef<ListComponent>,
    private dialog: MatDialog,
    private _snakBar: MatSnackBar
  ) {}

  ngOnInit(){
    this._snakBar.open("hit LIKE to shortlist your fav items...", "Close")
  }

  onClose() {
    this.listItemDialogRef.close();
  }

  openItem() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";    
    this.dialog.open(ItemComponent, dialogConfig);
  }

}
