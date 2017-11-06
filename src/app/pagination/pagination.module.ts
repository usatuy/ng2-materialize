import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MzPaginationPageComponent } from './pagination-page/pagination-page.component';
import { MzPaginationComponent } from './pagination.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MzPaginationComponent,
    MzPaginationPageComponent,
  ],
  exports: [
    MzPaginationComponent,
    MzPaginationPageComponent,
  ],
})
export class MzPaginationModule { }
