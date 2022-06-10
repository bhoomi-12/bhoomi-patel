import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClumsyComponent} from './clumsy/clumsy.component';
import { BhoomiComponent } from './bhoomi/bhoomi.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [{
    path:'bhoomi',
    component:BhoomiComponent
},
{
    path:'clumsy',
    component:ClumsyComponent
},
{
    path:'**',
    component:ErrorComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }