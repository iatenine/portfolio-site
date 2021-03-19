import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { ProjectsComponentComponent } from '../app/projects-component/projects-component.component';
import { StackComponentComponent } from '../app/stack-component/stack-component.component';
import { ContactComponentComponent } from '../app/contact-component/contact-component.component';

const routes: Routes = [
	{path: '', component: ProjectsComponentComponent},
  {path: 'contact', component: ContactComponentComponent},
  {path: 'stack', component: StackComponentComponent},
  {path: 'projects', component: ProjectsComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
