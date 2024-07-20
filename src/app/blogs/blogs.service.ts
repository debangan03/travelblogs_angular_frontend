import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Blog {
  _id: string;
  name: string;
  title: string;
  description: string;
  imgurl: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private apiUrl = 'https://travelbloggers.vercel.app/api/getblogs'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<{ blogs: Blog[] }> {
    return this.http.get<{ blogs: Blog[] }>(this.apiUrl);
  }
}
