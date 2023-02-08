// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { FormsModule } from '@angular/forms';

// Von der CLI eingefügt
import { CityValidationDirective } from './validation/city-validation.directive';
import { TabComponent } from './controls/tab/tab.component';
import { TabbedPaneComponent } from './controls/tabbed-pane/tabbed-pane.component';
import { TabNavigatorComponent } from './controls/tab-navigator/tab-navigator.component';
import { ClickWithWarningDirective } from './controls/click-with-warning.directive';
import { TooltipDirective } from './controls/tooltip.directive';
import { ManfriedDirective } from './controls/manfried.directive';
import { ManfriedComponent } from './controls/manfried/manfried.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,

    // Von der CLI eingefügt
    CityValidationDirective,
    TabComponent,
    TabbedPaneComponent,
    TabNavigatorComponent,
    ClickWithWarningDirective,
    TooltipDirective,
    ManfriedDirective,
    ManfriedComponent
  ],
  exports: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    FormsModule,
    CommonModule,

    // Neue Einträge
    CityValidationDirective,
    TabComponent,
    TabbedPaneComponent,
    TabNavigatorComponent,
    ClickWithWarningDirective,
    TooltipDirective,
    ManfriedDirective,
    ManfriedComponent
  ]
})
export class SharedModule {}
