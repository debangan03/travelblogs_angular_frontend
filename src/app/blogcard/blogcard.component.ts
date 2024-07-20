import { Component, Input } from '@angular/core';
import { Blogs } from '../Blogs';

@Component({
  selector: 'app-blogcard',
  standalone: true,
  imports: [],
  templateUrl: './blogcard.component.html',
  styleUrl: './blogcard.component.css'
})
export class BlogcardComponent {
  @Input() blog?: Blogs;
 constructor(){}
  ngOnInit(): void {
  }
  openpromt(){
    alert("hiii")
  }
}
