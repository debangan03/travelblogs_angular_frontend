import { Component, Input } from '@angular/core';
import { Blogs } from '../Blogs';
import { Router } from '@angular/router';
import { BlogdetailsService } from '../blogdetails/blogdetails.service';

@Component({
  selector: 'app-blogcard',
  standalone: true,
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css'],
  providers: [BlogdetailsService]
})
export class BlogcardComponent {
  @Input() blog?: Blogs;
  likesCount: number = 0;
  liked: boolean = false;

  constructor(private router: Router, private BlogdetailsService: BlogdetailsService) {}

  ngOnInit(): void {
    if (this.blog) {
      this.likesCount = this.blog.likes ?? 0; // Set default value to 0 if likes is undefined or null
    }
  }

  openBlog(id: string): void {
    this.router.navigate(['/blogs', id]);
  }

  likeIconClick(event: Event) {
    event.stopPropagation(); // Prevent click event from bubbling up to the parent div
    if (!this.liked) {
      this.increaseLikes();
    }
  }

  increaseLikes() {
    if (this.blog && this.blog._id) {
      this.BlogdetailsService.increaseLikes(this.blog._id).subscribe(
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
