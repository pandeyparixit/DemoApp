import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { MaterialComponent } from './components/material/material.component';
import { CollectionComponent } from './components/collection/collection.component';

const appRoutes: Routes = [
    { path: '', component: UserComponent },
    { path: 'user', component: UserComponent, data: { title: 'User' }},
    { path: 'material', component: MaterialComponent, data: { title: 'Material' } },
    { path: 'collection', component: CollectionComponent, data: { title: 'Collection' } },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);