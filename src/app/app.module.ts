import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardActionsComponent } from './card-actions/card-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTitleComponent,
    CardImageComponent,
    CardActionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
