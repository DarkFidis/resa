import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { MapComponent } from '../../shared/components/map/map.component';
import { CORE_ROUTING } from './core.routing';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CORE_ROUTING)
  ]
})
export class CoreModule { }
