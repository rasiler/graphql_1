import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  query: string;
  constructor(private postsService: PostsService, private userService: UserService) {}

  ngOnInit() {
  }

  updateQuery(query: string) {
    this.query = query;
  }

}
