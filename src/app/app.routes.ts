import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./blogs/blogs.component').then((c) => c.BlogsComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((c) => c.ContactComponent),
  },
  {
    path: 'blogs/:id',
    loadComponent: () =>
      import('./blogdetails/blogdetails.component').then(
        (c) => c.BlogdetailsComponent
      ),
  },
  {
    path: 'addblogs',
    loadComponent: () =>
      import('./addblogs/addblogs.component').then((c) => c.AddblogsComponent),
  },
];
