import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { NavebarComponent } from './navebar/navebar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StarsComponent } from './stars/stars.component';
import { ProductorComponent } from './productor/productor.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

const routeConfig: Routes = [
  {
    path:'', 
    component: HomeComponent
  },
  {
    path:'product/:prodTitle',
    component: ProductDetailComponent
  }
]

@NgModule({

  declarations: [
    AppComponent,
    NavebarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    StarsComponent,
    ProductorComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  // 模块依赖的其它模块
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  // 声明模块中提供的服务
  providers: [],

  // 声明模块的主
  bootstrap: [AppComponent]
})
export class AppModule { }
