import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./blogs/blogs.component').then(c => c.BlogsComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)
    }
];
