import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './contents/shared/news/details/details.component';

const routes: Routes = [
    // {
    //   path: '',
    //   loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule),
    // },
    {
      path: 'details',
      component: DetailsComponent,
    },
    // {
    //   path: '**',
    //   redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
    // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      useHash: true
   })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

