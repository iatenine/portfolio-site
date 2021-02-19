import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageViewComponent } from './page-view/page-view.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { StackComponentComponent } from './stack-component/stack-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    PageViewComponent,
    AboutComponentComponent,
    StackComponentComponent,
    ProjectsComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
