import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeatureSliderComponent } from './feature-slider/feature-slider.component';
import { DownloadKeyComponent } from './download-key/download-key.component';
import { ProductBannerComponent } from './product-banner/product-banner.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { DisplayAttachmentComponent } from './display-attachment/display-attachment.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureSliderComponent,
    DownloadKeyComponent,
    ProductBannerComponent,
    ProductGridComponent,
    DisplayAttachmentComponent,
    FooterComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
