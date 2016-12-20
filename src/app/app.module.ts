import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WidgetNavComponent } from './widgetnav.component';
import {HeaderBarComponent} from "./headerbar.component";
import {InfoBarComponent} from "./infobar.component";
import {FooterComponent} from "./footer.component";
import {LoginComponent} from "./login.component";
import { RouterModule }   from '@angular/router';
import {SplitComponent} from "./split.component";
import {Routes} from '@angular/router'

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'payment/:id', component:SplitComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    WidgetNavComponent,
    HeaderBarComponent,
    InfoBarComponent,
    FooterComponent,
    LoginComponent,
    SplitComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
