import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ReplacePipe } from './pipes/replace.pipe';
import { HeaderModule } from './header/header.module';
import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { BasketsModule } from './baskets/baskets.module';
import { BasketItemsModule } from './basket-items/basket-items.module';
import { CategoriesModule } from './categories/categories.module';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './errors/forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';
import { PipesModule } from './pipes/pipes.module';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizeFirstPipe,
    ReplacePipe,

    LoginComponent,
    ForbiddenComponent,
    RegisterComponent,
    VerifEmailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PipesModule,
    ClientsModule,
    ProductsModule,
    OrdersModule,
    BasketsModule,
    BasketItemsModule,
    CategoriesModule,
    HeaderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
