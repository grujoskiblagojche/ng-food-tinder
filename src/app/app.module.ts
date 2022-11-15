import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { LoaderComponent } from './components/loader/loader.component';

import { FoodService } from './services/food.service';
import { PersistanceService } from './services/persistance.service';

@NgModule({
  declarations: [AppComponent, ProductsComponent, LoaderComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [FoodService, PersistanceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
