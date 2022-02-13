import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hackernew-detail',
  templateUrl: './hackernew-detail.component.html',
  styleUrls: ['./hackernew-detail.component.css']
})
export class HackernewDetailComponent implements OnInit {
  article = {
    title: 'CodeGym',
    url: 'https://codegym.vn/'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
