import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { IPost } from './post.type';


const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class PostsService {

posts: IPost[]  = [
  {
    id: 0,
    title: 'Post 1 Hang',
    body: 'hang loose 1',
    likeCount: 0,
    date: new Date(),
    author: 'Rob'
  },
    {
    id: 1,
    title: 'Post 2 Loose',
    body: 'hang loose 2',
    likeCount: 0,
    date: new Date(),
    author: 'Rob'
  },
    {
    id: 2,
    title: 'Post 3 Dude',
    body: 'hang loose 3',
    likeCount: 0,
    date: new Date(),
    author: 'Rob'
  },
];

constructor(private serverService: ServerService) {}

 getFilteredPosts(query) {
   if (!query) { return this.posts; }
   const lowerCaseQuery = query.toLowerCase();
   return this.posts.filter((post) => {
     return post.title.toLowerCase().includes(query);
   });
 }

 getPosts() {
   this.serverService.get(`${BASE_URL}/posts`)
      .map(posts => {
        return this.normalizePosts(posts);
      })
      .subscribe((posts: IPost[]) => {
         this.posts = posts;
      });
 }

normalizePosts(posts) {
  return posts.map(this.normalizePost);
}

normalizePost(post) {
 return Object.assign({}, post, {
   likeCount: 0,
   author: 'Rob Rasile',
   date: new Date()
 });
}

updateLikeCount(id, likeCount) {
    const index = this.posts.findIndex((post) => post.id === id);
    this.posts[index].likeCount = likeCount;
}

getPost(id: number) {
    return this.posts.find(post => post.id === id);
}
}
