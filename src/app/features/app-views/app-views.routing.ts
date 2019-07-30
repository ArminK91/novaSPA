
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  {
    path: 'projects',
    loadChildren: './projects/projects-list.module#ProjectsListModule'
  },

];

export const routing = RouterModule.forChild(routes);
