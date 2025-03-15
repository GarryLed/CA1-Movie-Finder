import { Routes } from '@angular/router'; // import Routes type from @angular/router

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';

// Routes for the application
export const routes: Routes = [
    { path: '', component: SearchtitleComponent },
    { path: 'search', component: SearchComponent },
    { path: 'about', component: AboutComponent }
];
