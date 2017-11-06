import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mz-pagination-page',
  templateUrl: './pagination-page.component.html',
  styleUrls: ['./pagination-page.component.scss'],
})
export class MzPaginationPageComponent {

  @Input() active: boolean;
  @Input() disabled: boolean;
}
