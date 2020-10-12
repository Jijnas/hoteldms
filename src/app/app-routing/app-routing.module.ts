import { NgModule } from 'node_modules/@angular/core';
import { CommonModule } from 'node_modules/@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './routes';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
