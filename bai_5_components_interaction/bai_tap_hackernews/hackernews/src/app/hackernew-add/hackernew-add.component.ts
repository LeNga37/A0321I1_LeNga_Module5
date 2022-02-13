import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hackernew-add',
  templateUrl: './hackernew-add.component.html',
  styleUrls: ['./hackernew-add.component.css']
})
export class HackernewAddComponent implements OnInit {
  addArticles(){
    const addTitle = (document.getElementById('add-article-title') as HTMLInputElement).value;
    const addUrl = (document.getElementById('add-article-url')  as HTMLInputElement).value
    // this.articles.push({title: addTitle, url: addUrl});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
