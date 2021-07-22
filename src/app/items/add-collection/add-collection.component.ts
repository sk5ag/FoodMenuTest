import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent implements OnInit {

  constructor(
    public addCollectionDialogRef: MatDialogRef<AddCollectionComponent>,

  ) { }

  ngOnInit(): void {
  }

    onClose() {
    this.addCollectionDialogRef.close();
  }
}
