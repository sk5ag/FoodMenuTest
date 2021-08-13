import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  panelOpenState = false;


  constructor(
    public checkOutCollectionDialogRef: MatDialogRef<CheckOutComponent>,

  ) { }

  ngOnInit(): void {
  }
  onClose() {
    this.checkOutCollectionDialogRef.close();
  }

}
