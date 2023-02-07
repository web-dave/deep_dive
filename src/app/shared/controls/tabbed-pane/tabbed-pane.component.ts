import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss']
})
export class TabbedPaneComponent implements AfterContentInit {
  data = {
    foo: 'Bar',
    ping: 'Pong'
  };
  @ContentChildren(TabComponent)
  tabQueryList: QueryList<TabComponent> | undefined;
  i = 1;
  activeTab: TabComponent | undefined;

  get tabs(): TabComponent[] {
    return this.tabQueryList?.toArray() ?? [];
  }

  get currentPage() {
    return this.i;
  }

  set currentPage(n: number) {
    this.activate(this.tabs[n - 1]);
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

  say(word: string) {
    console.log(word);
  }
  // pageChange(page: number): void {
  //   this.activate(this.tabs[page - 1]);
  // }
}
