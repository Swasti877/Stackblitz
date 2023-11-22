import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ProductListComponent } from './components/product-list.component';
import { ProductComponent } from './components/product.component';
import { reducers } from './store/reducers';
import { ProductEffects } from './store/product/product.effects';
import { ProductPageComponent } from './pages/product-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar.component';
import { ProductFormComponent } from './components/product-form.component';
import { DashbaordComponent } from './components/app-dashboard.component';
import { DialogComponent } from './components/dialog.component';
import { NotificationEffect } from './store/notification/notification.effects';
import { SnackbarService } from './service/snackbar.service';
import { SnackbarComponent } from './components/snackbar.component';
import { ProductDetailComponent } from './components/product-detail';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormService } from './service/reative-form.service';
import { PermissionService } from './service/permission.service';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    ProductPageComponent,
    ProductComponent,
    NavbarComponent,
    ProductFormComponent,
    DashbaordComponent,
    DialogComponent,
    SnackbarComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductEffects, NotificationEffect]),
    BrowserAnimationsModule,
  ],
  providers: [SnackbarService, ReactiveFormService, PermissionService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
