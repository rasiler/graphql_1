import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
