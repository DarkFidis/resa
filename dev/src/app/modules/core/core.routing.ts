import { Route } from '@angular/router';
import { MapComponent } from '../../shared/components/map/map.component';

export const CORE_ROUTING = [
  {
    path: '',
    pathMatch: 'full',
    component: MapComponent
  }
];
