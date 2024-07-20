import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BlogcardComponent } from './blogcard/blogcard.component';
import { BlogsComponent } from './blogs/blogs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, BlogcardComponent, BlogsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel blogs';
}
