import { Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovielistComponent } from './movie/movielist/movielist.component';
import { AuthGuard } from './_guards/auth.guard';
import { MovieListResolver } from './_resolvers/movie-list.resolver';


export const appRoutes: Routes = [
    { path: 'home', component: MovielistComponent, resolve: {movies: MovieListResolver} },
    { path: 'movie', component: MovieComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            // { path: 'movie', component: MovieComponent, resolve: {movie: MovieListResolver} },
            // { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver} },
            // { path: 'member/edit', component: MemberEditComponent, 
            //     resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
            // { path: 'messages', component: MessagesComponent },
            // { path: 'lists', component: ListsComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
