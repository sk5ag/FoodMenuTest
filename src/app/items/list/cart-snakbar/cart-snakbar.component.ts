import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-cart-snakbar',
  templateUrl: './cart-snakbar.component.html',
  styleUrls: ['./cart-snakbar.component.css']
})
export class CartSnakbarComponent implements OnInit {

  constructor(    private dialog: MatDialog ) { }

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
