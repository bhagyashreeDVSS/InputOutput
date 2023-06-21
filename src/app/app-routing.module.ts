import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { PreviewformComponent } from './previewform/previewform.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'preview',
    component: PreviewformComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
