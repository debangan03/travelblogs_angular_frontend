import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../Blogs'; // Ensure this path is correct

@Injectable({
  providedIn: 'root',
})
export class BlogdetailsService {
  private apiUrl = 'https://travelblogs-backend.onrender.com'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}
  getBlogById(id: string): Observable<Blogs> {
    return this.http.get<Blogs>(`${this.apiUrl}/getblogs/${id}`);
  }
  increaseLikes(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/blogs/${id}/like`, {}); // Adjust endpoint as needed
  }
}
