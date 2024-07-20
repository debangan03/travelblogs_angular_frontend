import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Ensure HttpClientModule is imported
import { BlogsService } from './blogs.service';
import { CommonModule } from '@angular/common';
import { BlogcardComponent } from "../blogcard/blogcard.component";
import { Blogs } from '../Blogs';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, BlogcardComponent, HttpClientModule,FormsModule,ImageSliderComponent], // Import HttpClientModule
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [BlogsService]
})
export class BlogsComponent implements OnInit {
  blogs: Blogs[] = [];
  filteredBlogs: Blogs[] = [];
  searchQuery: string = '';

  

  constructor(private blogsService: BlogsService) {}

  ngOnInit() {
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.blogsService.getBlogs().subscribe(
      (response) => {
        this.blogs = response.blogs; // Access the `blogs` array from the response
        for (let blog of this.blogs){
          blog.createdAt = new Date(blog.createdAt).toLocaleDateString();
        }
        this.filteredBlogs = [...this.blogs]; // Initialize filtered blogs
      },
      (error) => {
        console.error('Error fetching blogs', error);
      }
    );
  }

  filterBlogs() {
    const query = this.searchQuery.toLowerCase();
    this.filteredBlogs = this.blogs.filter(blog =>
      blog.title.toLowerCase().includes(query) ||
      blog.description.toLowerCase().includes(query) ||
      blog.name.toLowerCase().includes(query)
    );
  }
}
