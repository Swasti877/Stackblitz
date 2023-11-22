import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page.component';
import { ProductFormComponent } from './components/product-form.component';
import { DashbaordComponent } from './components/app-dashboard.component';
import { ProductDetailComponent } from './components/product-detail';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authActivate } from './service/permission.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' },
  {
    path: 'product', component: DashbaordComponent, canActivate: [authActivate], children: [
      { path: '', component: ProductPageComponent, pathMatch: 'prefix' },
      { path: 'form', component: ProductFormComponent },
      { path: ':id', component: ProductDetailComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
