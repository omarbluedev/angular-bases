import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';

// import { HeroComponent } from './heroes/hero/hero.component';
// import { HerolistComponent } from './heroes/herolist/herolist.component';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
    // HeroComponent,
    // HerolistComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
