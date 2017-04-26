import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UserComponent } from './components/user/user.component';
import { MaterialComponent } from './components/material/material.component';

import { routing }        from './app.routing';
import { CollectionComponent } from './components/collection/collection.component';

import { ColleactableService } from './services/colleactable.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserComponent,
    MaterialComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ColleactableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
