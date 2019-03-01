import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import {routing} from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { RegisterComponent } from './views/user/register/register.component';
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import { PageListComponent } from './views/page/page-list/page-list.component';

// client services
import {UserService} from './services/user.service';
import {WebsiteService} from './services/website.service';

import { WidgetHeaderComponent } from './views/widget/widget-edit/header/widget-header/widget-header.component';

// directive for sorting widget list
import { SortableDirective } from './directives/sortable.directive';
import { HelloworldDirective } from './directives/helloworld.directive';
import { ChangeBgColorDirective } from './directives/change-bg-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    PageListComponent,
    SortableDirective,
    HelloworldDirective,
    WidgetHeaderComponent,
    ChangeBgColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [UserService, WebsiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
