import { CursosModule } from './cursos/cursos.module';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'cursos'},
  {path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(c => c.CursosModule)}
];

