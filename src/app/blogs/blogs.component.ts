import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Ensure HttpClientModule is imported
import { BlogsService } from './blogs.service';
import { CommonModule } from '@angular/common';
import { BlogcardComponent } from "../blogcard/blogcard.component";

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, BlogcardComponent, HttpClientModule], // Import HttpClientModule
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [BlogsService]
})
export class BlogsComponent implements OnInit {
  blogs: any[] = []; // Use `any[]` initially, you can define an interface if needed

  constructor(private blogsService: BlogsService) {}

  ngOnInit() {
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.blogsService.getBlogs().subscribe(
      (response) => {
        this.blogs = response.blogs; // Access the `blogs` array from the response
      },
      (error) => {
        console.error('Error fetching blogs', error);
      }
    );
  }
}
