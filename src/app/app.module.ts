import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BoardsListComponent } from './boards-list/boards-list.component';
import { BoardComponent } from './boards-list/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardsListComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
