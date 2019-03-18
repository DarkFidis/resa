import { Route } from '@angular/router';

export const APP_ROUTING = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './modules/core/core.module#CoreModule'
  }
];
