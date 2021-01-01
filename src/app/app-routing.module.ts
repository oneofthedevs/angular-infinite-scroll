import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SlideShowPageComponent } from './slide-show-page/slide-show-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      animation: 'isRight',
    },
  },
  {
    path: 'SlideShowPage',
    component: SlideShowPageComponent,
    data: {
      animation: 'isLeft',
    },
  },
  {
    path: 'int',
    loadChildren: () =>
      import('./interaction/interaction.module').then(
        (m) => m.InteractionModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
