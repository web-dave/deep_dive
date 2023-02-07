import { AfterContentInit, Component } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss']
})
export class TabbedPaneComponent implements AfterContentInit {
  tabs: TabComponent[] = [];
  activeTab: TabComponent | undefined;

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

  register(tab: TabComponent) {
    this.tabs.push(tab);
  }
}
