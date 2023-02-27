import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './gerenciar-financas/table/table.component';
import { GerenciarFinancasComponent } from './gerenciar-financas/gerenciar-financas.component';
import { CardResumoComponent } from './gerenciar-financas/card-resumo/card-resumo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    TableComponent,
    GerenciarFinancasComponent,
    CardResumoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
