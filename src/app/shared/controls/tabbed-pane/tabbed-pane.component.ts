import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss']
})
export class TabbedPaneComponent {
  @ContentChildren(TabComponent)
  tabQueryList: QueryList<TabComponent> | undefined;

  activeTab: TabComponent | undefined;
  currentPage = 0;

  get tabs(): TabComponent[] {
    return this.tabQueryList?.toArray() ?? [];
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
  }

  pageChange(page: number): void {
    this.activate(this.tabs[page - 1]);
  }
}
