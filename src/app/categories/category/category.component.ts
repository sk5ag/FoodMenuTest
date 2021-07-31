import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListComponent } from 'src/app/items/list/list.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  gridColumns = 4;
  showFiller = false;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openCategory() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    this.dialog.open(ListComponent, dialogConfig);
  }

}
