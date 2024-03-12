import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

@NgModule({
  declarations: [AppComponent, PdfViewerComponent],
  imports: [BrowserModule, AppRoutingModule, PdfJsViewerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
