import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss']
})
export class TabbedPaneComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tabQueryList: QueryList<TabComponent> | undefined;

  activeTab: TabComponent | undefined;
  currentPage = 0;

  get tabs(): TabComponent[] {
    return this.tabQueryList?.toArray() ?? [];
  }

  ngAfterContentInit() {
    if (this.tabs.length > 0) {
      this.activate(this.tabs[0]);
    }
  }
  activate(active: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.visible = tab === active;
    });
  }
  pageChange(page: number): void {
    this.activate(this.tabs[page - 1]);
  }
}
