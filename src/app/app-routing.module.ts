import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { PostsComponent } from './modules/posts/posts.component';


const routes: Routes = [{
  path: 'acceuil',
  component: DefaultComponent,
  children: [{
    path: 'home',
    component: HomeComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }]
}, {
  path: '**',
  component: FullwidthComponent,
  children: [
    {
      path: '',
      component: LoginComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
