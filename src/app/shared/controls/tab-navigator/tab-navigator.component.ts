import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-navigator',
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.scss']
})
export class TabNavigatorComponent {
  @Input() page = 0;
  @Input() pageCount = 0;
  @Input() pagedata: { [key: string]: string } = {};
  @Output() pageChange = new EventEmitter<number>();

  prev() {
    if (this.page <= 1) {
      return;
    }
    this.page--;
    this.pageChange.emit(this.page);
    this.pageCount = 7;
    this.pagedata = { tuff: 'Puff' };
  }
  next() {
    if (this.page >= this.pageCount) {
      return;
    }
    this.page++;
    this.pageChange.emit(this.page);
  }
}
