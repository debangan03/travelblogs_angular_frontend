import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogdetailsService } from './blogdetails.service';
import { Blogs } from '../Blogs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogdetails',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css'],
  providers: [BlogdetailsService],
})
export class BlogdetailsComponent implements OnInit {
  blog: Blogs = {
    _id: '',
    name: '',
    title: '',
    description: '',
    imgurl: '',
    slug: '',
    createdAt: '',
    updatedAt: '',
    likes: 0
  };
  likesCount: number = 0;
  liked: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private blogdetailsService: BlogdetailsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fetchBlogById(id);
  }

  fetchBlogById(id: string | null) {
    if (id) {
      this.blogdetailsService.getBlogById(id).subscribe((blog) => {
        this.blog = blog;
        this.blog.createdAt = new Date(this.blog.createdAt).toLocaleDateString();
        this.likesCount = this.blog.likes ?? 0; // Set default value to 0 if likes is undefined or null
        this.liked = this.blog.likes ? this.blog.likes > 0 : false; // Check if liked
      });
    }
  }

  likeIconClick(event: Event) {
    event.stopPropagation();
    if (!this.liked) {
      this.increaseLikes();
    }
  }

  increaseLikes() {
    if (this.blog && this.blog._id) {
      this.blogdetailsService.increaseLikes(this.blog._id).subscribe(
        (response) => {
          this.likesCount += 1;
          this.liked = true;
        },
        (error) => {
          console.error('Error increasing likes', error);
        }
      );
    }
  }
}
