// ANGULAR CORE
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ANGULAR MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';


// COMPONENTS
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { PreviewProductsComponent } from './preview-products/preview-products.component';
import { TypeCardComponent } from './preview-products/type-card/type-card.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

// THIRD PARTY

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopNavComponent,
    CarouselComponent,
    PreviewProductsComponent,
    TypeCardComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
