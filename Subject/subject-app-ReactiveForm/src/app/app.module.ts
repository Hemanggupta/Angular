import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleOneModule } from './module-one/module-one.module';
import { ModuleTwoModule } from './module-two/module-two.module';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ModuleOneModule, ModuleTwoModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
