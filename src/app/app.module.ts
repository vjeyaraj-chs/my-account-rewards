import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//componenets
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContractSearchComponent } from './components/contract-search/contract-search.component';

//services
import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';

@NgModule({
    declarations: [
        AppComponent,
        ContractSearchComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        HttpService,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
