import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe }  from './products/product-filter.pipe';
import { StarComponent }  from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule ,
    RouterModule.forRoot([
      { path: "products", component: ProductListComponent },
      { path: "product/:id", component: ProductDetailComponent },
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])
    ],    
  declarations: [ 
    AppComponent, 
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    StarComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
