import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
//import {QuillEditorModule} from 'ngx-quill-editor';
import { SafePipe } from './views/widget/widget-list/safe-pipe.pipe';
import { OrderByPipe } from './views/widget/widget-list/order-by-pipe.pipe';
import { SortableDirective } from './views/widget/widget-list/sortable.directive';

import {routing} from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { RegisterComponent } from './views/user/register/register.component';
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import { PageListComponent } from './views/page/page-list/page-list.component';


// directive for sorting widget list
//import { SortableDirective } from './directives/sortable.directive';
import { HelloworldDirective } from './directives/helloworld.directive';
import { ChangeBgColorDirective } from './directives/change-bg-color.directive';

// client services
import {UserService} from './services/user.service';
import {WebsiteService} from './services/website.service';
import { WidgetHeaderComponent } from './views/widget/widget-edit/widget-header/widget-header.component';
import { WidgetHtmlComponent } from './views/widget/widget-edit/widget-html/widget-html.component';
import { WidgetImageComponent } from './views/widget/widget-edit/widget-image/widget-image.component';
import { WidgetTextComponent } from './views/widget/widget-edit/widget-text/widget-text.component';
import { WidgetYoutubeComponent } from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import { WidgetNewComponent } from './views/widget/widget-new/widget-new.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';
import {PageService} from './services/page.service';
import {WidgetService} from './services/widget.service';
import {SharedService} from './services/shared.service';

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
    ChangeBgColorDirective,
    WidgetHtmlComponent,
    WidgetImageComponent,
    WidgetTextComponent,
    WidgetYoutubeComponent,
    WidgetListComponent,
    WidgetNewComponent,
    WidgetEditComponent,
    SafePipe,
    SortableDirective,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //QuillEditorModule,
    QuillModule,
    routing
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
