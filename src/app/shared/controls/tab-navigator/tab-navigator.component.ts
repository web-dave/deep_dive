import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { TabbedPaneService } from '../tabbed-pane/tabbed-pane.service';

@Component({
  selector: 'app-tab-navigator',
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.scss']
})
export class TabNavigatorComponent implements OnInit {
  @Input() page = 0;
  @Input() pageCount = 0;
  @Output() pageChange = new EventEmitter<number>();
  private service = inject(TabbedPaneService);
  ngOnInit(): void {
    this.service.pageCount.subscribe((pageCount) => {
      this.pageCount = pageCount;
    });
    this.service.currentPage.subscribe((page) => {
      this.page = page;
    });
  }

  prev(): void {
    if (this.page <= 1) {
      return;
    }
    this.page--;
    this.pageChange.emit(this.page);
    this.service.currentPage.next(this.page);
  }

  next(): void {
    if (this.page >= this.pageCount) {
      return;
    }
    this.page++;
    this.pageChange.emit(this.page);
    this.service.currentPage.next(this.page);
  }
}
