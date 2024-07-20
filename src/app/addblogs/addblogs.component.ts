import { Component } from '@angular/core';
import { addBlogService } from './addblog.service';
import { Blogs } from '../Blogs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addblogs',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ToastModule],
  templateUrl: './addblogs.component.html',
  styleUrls: ['./addblogs.component.css'],
  providers: [addBlogService, MessageService] // Use MessageService here
})
export class AddblogsComponent {
  blog: Blogs = {
    _id: '',
    name: '',
    title: '',
    description: '',
    imgurl: '',
    slug: '',
    createdAt: '',
    updatedAt: ''
  };
  previewUrl: string | ArrayBuffer | null = '';

  constructor(
    private addBlogService: addBlogService,
    private router: Router,
    private messageService: MessageService // Inject MessageService
  ) {}

  onImageUrlChange() {
    this.previewUrl = this.blog.imgurl;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
        this.blog.imgurl = reader.result as string; // Save base64 string
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    console.log('Blog data:', this.blog);
    this.addBlogService.addBlog(this.blog).subscribe(
      (response) => {
        console.log('Blog added successfully:', response);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Blog added successfully!'
        });
        // Reset the form
        this.blog = {
          _id: '',
          name: '',
          title: '',
          description: '',
          imgurl: '',
          slug: '',
          createdAt: '',
          updatedAt: ''
        };
        this.previewUrl = null;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);

        // Redirect to home page
        
      },
      (error) => {
        console.error('Error adding blog:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error adding blog. Please try again.'
        });
      }
    );
  }
}
