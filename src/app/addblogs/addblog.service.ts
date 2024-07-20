import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../Blogs';

@Injectable({
  providedIn: 'root'
})
export class addBlogService {

  private apiUrl = 'http://localhost:3000/addblog';

  constructor(private http: HttpClient) {}

  addBlog(blog: Blogs): Observable<Blogs> {
    return this.http.post<Blogs>(this.apiUrl, blog);
  }
}
