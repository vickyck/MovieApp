import {Injectable} from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';

// @Injectable()
// export class PreventUnsavedChanges implements CanDeactivate<MovieComponent> {
//     // canDeactivate(component: MovieComponent) {
//     //     if (component.editForm.dirty) {
//     //         return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
//     //     }
//     //     return true;
//     // }
// }