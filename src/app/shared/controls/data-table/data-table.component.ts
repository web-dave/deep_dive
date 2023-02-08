import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TableFieldDirective } from '../table-field.directive';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @ContentChildren(TableFieldDirective) fields!: QueryList<TableFieldDirective>;
  @Input() data: any[] = [];

  get fieldList(): TableFieldDirective[] {
    return this.fields.toArray();
  }
}
