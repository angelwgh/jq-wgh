import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavebarComponent } from './navebar/navebar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StarsComponent } from './stars/stars.component';
import { ProductorComponent } from './productor/productor.component';


@NgModule({

  declarations: [
    AppComponent,
    NavebarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    StarsComponent,
    ProductorComponent
  ],
  // 模块依赖的其它模块
  imports: [
    BrowserModule
  ],
  // 声明模块中提供的服务
  providers: [],

  // 声明模块的主
  bootstrap: [AppComponent]
})
export class AppModule { }
