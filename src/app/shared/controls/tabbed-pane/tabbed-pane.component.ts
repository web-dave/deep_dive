import { Component, ContentChildren, inject, QueryList, ViewChild } from '@angular/core';
import { TabNavigatorComponent } from '../tab-navigator/tab-navigator.component';
import { TabComponent } from '../tab/tab.component';
import { TabbedPaneService } from './tabbed-pane.service';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss']
})
export class TabbedPaneComponent {
  @ContentChildren(TabComponent)
  tabQueryList: QueryList<TabComponent> | undefined;

  @ViewChild('navigator')
  navigator: TabNavigatorComponent | undefined;

  activeTab: TabComponent | undefined;
  currentPage = 0;

  private service = inject(TabbedPaneService);

  get tabs(): TabComponent[] {
    return this.tabQueryList?.toArray() ?? [];
  }
  ngAfterViewInit(): void {
    this.service.pageCount.next(this.tabs.length);
    this.service.currentPage.subscribe((page: number) => {
      if (page === this.currentPage) {
        return;
      }
      this.pageChange(page);
    });
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.activate(this.tabs[0]);
    }
  }

  register(tab: TabComponent): void {
    this.tabs.push(tab);
  }

  activate(active: TabComponent): void {
    for (const tab of this.tabs) {
      tab.visible = tab === active;
    }
    this.activeTab = active;

    this.currentPage = this.tabs.indexOf(active) + 1;
    this.service.currentPage.next(this.currentPage);
  }

  pageChange(page: number): void {
    this.activate(this.tabs[page - 1]);
  }
}
