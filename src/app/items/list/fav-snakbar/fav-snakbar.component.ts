import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-fav-snakbar',
  templateUrl: './fav-snakbar.component.html',
  styleUrls: ['./fav-snakbar.component.css']
})
export class FavSnakbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCart(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";    
    this.dialog.open(CartComponent, dialogConfig);
  }
  
}
