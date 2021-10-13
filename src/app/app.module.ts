import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TechModules } from './techModules/tech-modules.module';
import { PreloadTableComponent } from './components/preload-table/preload-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    PreloadTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    NgbModule,
    TechModules
  ],
  entryComponents: [],
  providers: [ TechModules ],
  bootstrap: [AppComponent]
})
export class AppModule { }
