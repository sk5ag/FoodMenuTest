import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponser-component',
  templateUrl: './sponser-component.component.html',
  styleUrls: ['./sponser-component.component.css']
})
export class SponserComponentComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit(): void {
  }

}
