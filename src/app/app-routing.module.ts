import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SectionComponent } from './section/section.component';
import { SuccessComponent } from './success/success.component';
import { ChangeSectionComponent } from './change-section/change-section.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'section/:id', component: SectionComponent },
  { path: 'update-section/:id', component: ChangeSectionComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
