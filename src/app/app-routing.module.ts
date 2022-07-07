import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './contents/about/about.component';
import { ContactComponent } from './contents/contact/contact.component';
import { MeteorologyComponent } from './contents/meteorology/meteorology.component';
import { PrincipalComponent } from './contents/principal/principal.component';
import { DetailsComponent } from './contents/shared/news/details/details.component';

const routes: Routes = [
    {
      path: '',
    component: PrincipalComponent,
    },
    {
      path: 'details',
      component: DetailsComponent,
    },
    {
      path: 'contact',
      component: ContactComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'meteorology',
      component: MeteorologyComponent,
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

