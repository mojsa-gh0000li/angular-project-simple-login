import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: { description: string, image: string, post_id: number, user_id: number }[] = [];

  constructor(private authService: AuthService, private tokenService: TokenService) {}

  ngOnInit() {
    if (!this.tokenService.getToken()) {
      console.log('لطفاً ابتدا وارد شوید.');
      return;
    }
    this.authService.getPosts().subscribe({
      next: (response) => {
        this.posts = response.posts;
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      }
    });
  }
}       