import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../Blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private apiUrl = 'https://travelblogs-backend.onrender.com'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<{ blogs: Blogs[] }> {
    return this.http.get<{ blogs: Blogs[] }>(`${this.apiUrl}/getblogs`);
  }
  
}
